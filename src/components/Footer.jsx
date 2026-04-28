import Link from 'next/link'
import { navItems, socialLinks } from './content'

const Footer = () => {
  return (
    <footer className="section-shell pb-10 pt-14">
      <div className="rounded-3xl border border-slate-200/70 bg-white/85 p-6 shadow-glass backdrop-blur-xl sm:p-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl font-bold text-ink">Bibek Poudel</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Building reliable, user-centered AI products with data science and machine learning.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Explore</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-cyanwave">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Connect</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    className="transition hover:text-cyanwave"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-4 text-center text-sm text-slate-500">
          © 2026 Bibek Poudel. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
