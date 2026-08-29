"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FiCopy, FiExternalLink, FiShare2 } from 'react-icons/fi'
import { certificates } from './content'

function getCertificatePreview(link) {
  const extension = link.split('.').pop()?.toLowerCase()

  if (extension === 'png' || extension === 'jpg' || extension === 'jpeg' || extension === 'webp') {
    return 'image'
  }

  return 'pdf'
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  return isMobile
}

const previewShellClassName = 'relative flex h-full w-full items-center justify-center bg-white p-4'
const previewContentClassName = 'h-full w-full max-w-full max-h-full object-contain'

function getAbsoluteCertificateLink(link) {
  if (typeof window === 'undefined') {
    return link
  }

  try {
    return new URL(link, window.location.origin).href
  } catch {
    return link
  }
}

export default function Certificates() {
  const [copiedLink, setCopiedLink] = useState('')
  const isMobile = useIsMobile()

  async function handleCopy(link) {
    const absoluteLink = getAbsoluteCertificateLink(link)

    try {
      await navigator.clipboard.writeText(absoluteLink)
      setCopiedLink(link)
      window.setTimeout(() => setCopiedLink(''), 1800)
    } catch {
      setCopiedLink('')
    }
  }

  async function handleShare(certificate) {
    const absoluteLink = getAbsoluteCertificateLink(certificate.link)

    const shareData = {
      title: certificate.title,
      text: `${certificate.title} - ${certificate.issuer}`,
      url: absoluteLink,
    }

    if (navigator.share) {
      try {
        await navigator.share(shareData)
        return
      } catch {
        return
      }
    }

    await handleCopy(certificate.link)
  }

  return (
    <section className="section-shell py-16 sm:py-24">
      <div className="glass-card p-6 sm:p-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title">Certificates</h2>
        </div>

        {certificates.length ? (
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 lg:grid-cols-2">
            {certificates.map((certificate) => (
              <article
                key={certificate.link}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-cyanwave/30 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyanwave">
                      {certificate.issuer}
                    </p>
                    <h3 className="mt-3 font-display text-xl font-semibold text-slate-900">
                      {certificate.title}
                    </h3>
                  </div>
                  {certificate.date ? (
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
                      {certificate.date}
                    </span>
                  ) : null}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {certificate.description}
                </p>

                {certificate.credentialId ? (
                  <p className="mt-4 text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                    Credential ID: {certificate.credentialId}
                  </p>
                ) : null}

                <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                  <div className="border-b border-slate-200 px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                      Certificate Preview
                    </p>
                  </div>
                  <div className="h-[340px] bg-white sm:h-[380px] lg:h-[400px]">
                    {getCertificatePreview(certificate.link) === 'image' ? (
                      <div className={previewShellClassName}>
                        <Image
                          src={certificate.link}
                          alt={`${certificate.title} preview`}
                          fill
                          sizes="(min-width: 1024px) 40vw, 100vw"
                          className="object-contain p-3"
                        />
                      </div>
                    ) : isMobile ? (
                      /* Mobile: iframes don't render PDFs — show a tap-to-open card */
                      <div className="flex h-full flex-col items-center justify-center gap-5 px-6 text-center">
                        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-slate-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.5}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-10 w-10 text-slate-400"
                          >
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="9" y1="13" x2="15" y2="13" />
                            <line x1="9" y1="17" x2="12" y2="17" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-700">PDF Certificate</p>
                          <p className="mt-1 text-xs text-slate-500">
                            Tap the button below to open the certificate
                          </p>
                        </div>
                        <a
                          href={certificate.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center rounded-full bg-cyanwave px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
                        >
                          <FiExternalLink className="mr-2" />
                          Open Certificate
                        </a>
                      </div>
                    ) : (
                      <div className={previewShellClassName}>
                        <iframe
                          src={`${certificate.link}#view=FitH&toolbar=0&navpanes=0&scrollbar=0`}
                          title={`${certificate.title} preview`}
                          className={previewContentClassName}
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-900"
                  >
                    <FiExternalLink className="mr-2" />
                    Open
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(certificate.link)}
                    className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                  >
                    <FiCopy className="mr-2" />
                    {copiedLink === certificate.link ? 'Copied' : 'Copy Link'}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleShare(certificate)}
                    className="inline-flex items-center rounded-full border border-cyanwave/30 bg-cyanwave/10 px-4 py-2 text-sm font-semibold text-cyanwave transition hover:bg-cyanwave/15"
                  >
                    <FiShare2 className="mr-2" />
                    Share
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="text-center text-slate-500">No certificates available.</p>
        )}
      </div>
    </section>
  )
}