"use client"

import { useState } from 'react'
import { FaEnvelope, FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { availability, contactDetails, contactFaq, socialLinks } from './content'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    website: '',
  })
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const iconMap = {
    Facebook: FaFacebookF,
    Instagram: FaInstagram,
    LinkedIn: FaLinkedinIn,
    GitHub: FaGithub,
    Email: FaEnvelope,
  }

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus({ type: 'idle', message: '' })
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        setStatus({
          type: 'error',
          message: data?.error || 'Unable to send message right now. Please try again later.',
        })
        return
      }

      setStatus({ type: 'success', message: 'Message sent successfully. I will get back to you soon.' })
      setFormData({ name: '', email: '', message: '', website: '' })
    } catch {
      setStatus({
        type: 'error',
        message: 'Network error while sending message. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="section-shell py-16 sm:py-24">
      <div className="glass-card p-6 sm:p-10">
        <h2 className="section-title text-center">Contact</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
          I am open to good-fit roles and collaborations where the work quality and learning scope are strong.
        </p>

        <div className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-3">
          {contactDetails.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">{item.label}</p>
              <p className="mt-2 text-sm font-semibold text-slate-700">{item.value}</p>
            </a>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 max-w-2xl space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"
        >
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            autoComplete="off"
            tabIndex={-1}
            className="hidden"
            aria-hidden="true"
          />

          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              minLength={2}
              maxLength={80}
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-slate-800 outline-none transition focus:border-cyanwave focus:ring-2 focus:ring-cyanwave/20"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              maxLength={120}
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-slate-800 outline-none transition focus:border-cyanwave focus:ring-2 focus:ring-cyanwave/20"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
              minLength={10}
              maxLength={2000}
              className="w-full resize-none rounded-xl border border-slate-300 px-4 py-2.5 text-slate-800 outline-none transition focus:border-cyanwave focus:ring-2 focus:ring-cyanwave/20"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-xl bg-ink py-3 text-sm font-semibold text-white transition hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          {status.message ? (
            <p
              role="status"
              className={`text-center text-sm ${
                status.type === 'success' ? 'text-emerald-600' : 'text-rose-600'
              }`}
            >
              {status.message}
            </p>
          ) : null}
        </form>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {socialLinks.map((item) => {
            const Icon = iconMap[item.label]

            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                aria-label={item.label}
                className="rounded-full border border-slate-300 bg-white p-2.5 text-slate-700 transition hover:border-slate-400 hover:text-cyanwave"
              >
                <Icon size={18} />
              </a>
            )
          })}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="font-display text-xl font-semibold text-slate-800">Availability</h3>
            <ul className="mt-4 space-y-2 text-slate-600">
              {availability.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyanwave" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="font-display text-xl font-semibold text-slate-800">FAQ</h3>
            <div className="mt-4 space-y-3">
              {contactFaq.map((item) => (
                <article key={item.question}>
                  <p className="text-sm font-semibold text-slate-800">{item.question}</p>
                  <p className="mt-1 text-sm text-slate-600">{item.answer}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

export default Contact
