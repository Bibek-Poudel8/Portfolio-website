import Link from 'next/link'
import { FaEnvelope, FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import {
  coreStacks,
  experienceSnapshot,
  heroContent,
  highlights,
  homeSections,
  services,
  socialLinks,
} from './content'

const Home = () => {
  const iconMap = {
    Facebook: FaFacebookF,
    Instagram: FaInstagram,
    LinkedIn: FaLinkedinIn,
    GitHub: FaGithub,
    Email: FaEnvelope,
  }

  return (
    <section className="relative pb-14 pt-28 sm:pt-36">
      {/* Full-bleed gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Top-left orb */}
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-cyanwave/20 blur-[130px]" />
        {/* Top-right orb — same colour, no orange */}
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-cyanwave/20 blur-[130px]" />
        {/* Bottom fill — pushed well below content so no line artifacts */}
        <div className="absolute -bottom-40 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-cyanwave/10 blur-[120px]" />
      </div>

      <div className="section-shell">

      <div className="grid items-start gap-10 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="animate-fadeInUp">

          {/* Badge pill removed */}

          <h1 className="mt-5 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
            {/* Orange highlight span removed — plain title text only */}
            {heroContent.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            {heroContent.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={heroContent.primaryCta.href}
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_-18px_rgba(15,23,42,0.65)] transition hover:-translate-y-0.5 hover:bg-slate-900"
            >
              {heroContent.primaryCta.label}
            </Link>
            <a
              href="/Bibek_Poudel_CV.pdf"
              download="Bibek_Poudel_CV.pdf"
              className="rounded-full border border-slate-300/80 bg-white/85 px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-400 hover:bg-white"
            >
              Download CV
            </a>
            <Link
              href={heroContent.secondaryCta.href}
              className="rounded-full border border-slate-300/80 bg-white/85 px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-400 hover:bg-white"
            >
              {heroContent.secondaryCta.label}
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <article
                key={item.label}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/85 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >

                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{item.label}</p>
                <p className="mt-2 text-base font-semibold text-slate-800">{item.value}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="glass-card animate-float p-6 sm:p-8">
          <p className="text-sm font-semibold text-slate-600">Connect with me</p>
          <div className="mt-4 flex flex-wrap gap-3">
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
        </aside>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <section className="rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm sm:p-8">
          <h2 className="font-display text-2xl font-semibold text-slate-800">What You Can Find Here</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {homeSections.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <p className="text-sm font-semibold text-slate-800">{item.title}</p>
                <p className="mt-1 text-sm text-slate-600">{item.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm sm:p-8">
          <h2 className="font-display text-2xl font-semibold text-slate-800">What I Can Help With</h2>
          <ul className="mt-5 space-y-3 text-slate-700">
            {services.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyanwave" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <section className="rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm sm:p-8">
          <h2 className="font-display text-2xl font-semibold text-slate-800">Experience Snapshot</h2>
          <div className="mt-4 space-y-3">
            {experienceSnapshot.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-slate-800">{item.title}</p>
                <p className="mt-1 text-sm text-slate-600">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm sm:p-8">
          <h2 className="font-display text-2xl font-semibold text-slate-800">Core Tech Stacks</h2>
          <div className="mt-4 space-y-3">
            {coreStacks.map((item) => (
              <article key={item.name} className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-slate-800">{item.name}</p>
                <p className="mt-1 text-sm text-slate-600">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
      </div> {/* end section-shell */}
    </section>
  )
}

export default Home