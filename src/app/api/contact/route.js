import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

const requestLog = new Map()
const RATE_LIMIT_WINDOW_MS = 60 * 1000
const MAX_REQUESTS_PER_WINDOW = 5

function sanitizeHeaderValue(value) {
  return String(value).replace(/[\r\n]+/g, ' ').trim()
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function getClientIp(request) {
  const xForwardedFor = request.headers.get('x-forwarded-for')
  if (xForwardedFor) {
    return xForwardedFor.split(',')[0].trim()
  }

  return request.headers.get('x-real-ip') || 'unknown'
}

function isRateLimited(ip) {
  const now = Date.now()
  const existing = requestLog.get(ip) || []
  const recent = existing.filter((time) => now - time < RATE_LIMIT_WINDOW_MS)

  if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
    requestLog.set(ip, recent)
    return true
  }

  recent.push(now)
  requestLog.set(ip, recent)
  return false
}

function validatePayload({ name, email, message, website }) {
  if (website) {
    return { valid: false, error: 'Spam detected.' }
  }

  if (!name || name.trim().length < 2 || name.trim().length > 80) {
    return { valid: false, error: 'Please provide a valid name.' }
  }

  if (!email || email.length > 120) {
    return { valid: false, error: 'Please provide a valid email address.' }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { valid: false, error: 'Please provide a valid email address.' }
  }

  if (!message || message.trim().length < 10 || message.trim().length > 2000) {
    return { valid: false, error: 'Message should be between 10 and 2000 characters.' }
  }

  return { valid: true }
}

export async function POST(request) {
  try {
    const ip = getClientIp(request)

    const allowedOrigins = process.env.CONTACT_ALLOWED_ORIGINS
    if (allowedOrigins) {
      const origin = request.headers.get('origin')
      const allowed = allowedOrigins.split(',').map((item) => item.trim()).filter(Boolean)

      if (!origin || !allowed.includes(origin)) {
        return NextResponse.json({ error: 'Request origin is not allowed.' }, { status: 403 })
      }
    }

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a minute before trying again.' },
        { status: 429 },
      )
    }

    const body = await request.json()
    const { name = '', email = '', message = '', website = '' } = body || {}

    const validation = validatePayload({
      name: String(name),
      email: String(email),
      message: String(message),
      website: String(website),
    })

    if (!validation.valid) {
      return NextResponse.json({ error: validation.error }, { status: 400 })
    }

    const host = process.env.SMTP_HOST
    const port = Number(process.env.SMTP_PORT || 587)
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS
    const to = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER

    if (!host || !user || !pass || !to) {
      return NextResponse.json(
        {
          error:
            'Contact form is not configured yet. Add SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and CONTACT_TO_EMAIL in environment variables.',
        },
        { status: 500 },
      )
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      requireTLS: port === 587,
      tls: {
        minVersion: 'TLSv1.2',
      },
      auth: {
        user,
        pass,
      },
    })

    const safeName = sanitizeHeaderValue(name.trim())
    const safeEmail = sanitizeHeaderValue(email.trim())
    const safeMessage = message.trim()
    const safeHtmlMessage = escapeHtml(safeMessage).replace(/\n/g, '<br/>')

    try {
      await transporter.verify()
    } catch (error) {
      console.error('SMTP verification failed:', error)
      return NextResponse.json(
        {
          error: 'SMTP configuration failed. Please check your SMTP credentials.',
        },
        { status: 500 },
      )
    }

    await transporter.sendMail({
      from: `Portfolio Contact <${user}>`,
      replyTo: safeEmail,
      to,
      subject: `New Portfolio Message from ${safeName}`,
      text: [
        `Name: ${safeName}`,
        `Email: ${safeEmail}`,
        '',
        'Message:',
        safeMessage,
      ].join('\n'),
      html: `
        <h2>New Portfolio Contact Message</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${safeHtmlMessage}</p>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      {
        error: 'Unable to send message right now. Please try again later.',
      },
      { status: 500 },
    )
  }
}
