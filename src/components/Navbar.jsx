"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { navItems } from './content'

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [showNav, setShowNav] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY

      if (window.innerWidth < 640) {
        if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
          setShowNav(false)
        } else {
          setShowNav(true)
        }
      } else {
        setShowNav(true)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed left-0 right-0 top-3 z-50 mx-auto flex w-[min(96%,72rem)] items-center justify-between rounded-full border border-white/70 bg-white/80 px-4 py-3 shadow-glass backdrop-blur-xl transition-[opacity,transform] duration-300 sm:px-6 ${
        showNav ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <Link href="/" className="font-display text-lg font-bold tracking-tight text-ink sm:text-2xl">
        Bibek Poudel
      </Link>

      <ul className="hidden items-center gap-1 lg:flex">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                pathname === item.href
                  ? 'bg-ink text-white'
                  : 'text-slate-700 hover:bg-slate-900 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className="hidden rounded-full bg-cyanwave px-5 py-2 text-sm font-semibold text-white transition hover:bg-cyan-700 lg:inline-flex"
      >
        Let&apos;s Work Together
      </Link>

      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="rounded-full border border-slate-300 bg-white p-2 text-2xl text-slate-800 lg:hidden"
        aria-label="Toggle menu"
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {isOpen && (
        <ul className="absolute left-0 right-0 top-16 mx-auto w-[92%] space-y-2 rounded-2xl border border-white/70 bg-white/95 p-3 shadow-glass lg:hidden">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block rounded-xl px-4 py-2 text-center text-sm font-semibold transition ${
                  pathname === item.href
                    ? 'bg-ink text-white'
                    : 'text-slate-700 hover:bg-slate-900 hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="block rounded-xl bg-cyanwave px-4 py-2 text-center text-sm font-semibold text-white"
              onClick={() => setIsOpen(false)}
            >
              Let&apos;s Work Together
            </Link>
          </li>
        </ul>
      )}
    </nav>
  )
}
