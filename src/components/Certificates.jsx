"use client"

import Image from 'next/image'
import { useState } from 'react'
import { FiCopy, FiExternalLink, FiShare2 } from 'react-icons/fi'
import { certificates } from './content'

function getCertificatePreview(link) {
  const extension = link.split('.').pop()?.toLowerCase()

  if (extension === 'png' || extension === 'jpg' || extension === 'jpeg' || extension === 'webp') {
    return 'image'
  }

  return 'pdf'
}

const previewShellClassName = 'relative flex h-full w-full items-center justify-center bg-white p-4'
const previewContentClassName = 'h-full w-full max-w-full max-h-full object-contain'

export default function Certificates() {
  const [copiedLink, setCopiedLink] = useState('')

  async function handleCopy(link) {
    try {
      await navigator.clipboard.writeText(link)
      setCopiedLink(link)
      window.setTimeout(() => setCopiedLink(''), 1800)
    } catch {
      setCopiedLink('')
    }
  }

  async function handleShare(certificate) {
    const shareData = {
      title: certificate.title,
      text: `${certificate.title} - ${certificate.issuer}`,
      url: certificate.link,
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
                    ) : (
                      <div className={previewShellClassName}>
                        <iframe
                          src={certificate.link}
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