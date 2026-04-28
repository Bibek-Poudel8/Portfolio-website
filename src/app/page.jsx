import Home from '../components/Home'
import Link from 'next/link'

export const metadata = {
  description:
    'Portfolio website of Bibek Poudel showcasing AI, data science, and full stack web development experience.',
}

export default function Page() {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Bibek Poudel',
    jobTitle: 'AI and Full Stack Web Developer',
    url: '/',
    sameAs: [
      'https://www.linkedin.com/in/pbibek8/',
      'https://github.com/Bibek-Poudel8',
      'https://www.instagram.com/pbibek8/',
      'https://www.facebook.com/pbibek8/',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Home />

      <section className="section-shell pb-16 sm:pb-20">
        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href="/about"
            className="group rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">About</p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-slate-800">About Me</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Background, education, and current interests.
            </p>
            <p className="mt-4 text-sm font-semibold text-cyanwave">Read About Me</p>
          </Link>

          <Link
            href="/projects"
            className="group rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Projects</p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-slate-800">Projects</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Selected projects with tools and outcomes.
            </p>
            <p className="mt-4 text-sm font-semibold text-cyanwave">View Projects</p>
          </Link>

          <Link
            href="/skills"
            className="group rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Capabilities</p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-slate-800">Skills</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Main technologies and workflow I use.
            </p>
            <p className="mt-4 text-sm font-semibold text-cyanwave">See Skills</p>
          </Link>

          <Link
            href="/contact"
            className="group rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Contact</p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-slate-800">Contact</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Connect for good-fit roles and quality collaborations.
            </p>
            <p className="mt-4 text-sm font-semibold text-cyanwave">Get in Touch</p>
          </Link>
        </div>
      </section>
    </>
  )
}
