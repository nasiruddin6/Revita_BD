import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../data/site'
import Logo from './Logo'

const joinClass =
  'inline-flex items-center justify-center rounded-button bg-accent px-4 py-2 text-sm font-semibold tracking-wide text-primary-900 shadow-cta transition duration-200 hover:-translate-y-px hover:bg-accent-400'

function linkClass({ isActive }) {
  return [
    'relative py-1 text-[0.8125rem] font-medium tracking-wide transition-colors duration-200',
    isActive
      ? 'text-primary-800 after:absolute after:inset-x-1 after:-bottom-1 after:h-px after:bg-accent'
      : 'text-primary-800/65 hover:text-primary-800',
  ].join(' ')
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined

    const onKey = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  const solid = scrolled || menuOpen

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-300 ${
          solid
            ? 'border-secondary-200/80 bg-white/95 shadow-soft backdrop-blur-md'
            : 'border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-[4.25rem] max-w-container items-center justify-between gap-4 px-gutter md:h-[4.75rem]">
          <Logo compact />

          <nav aria-label="Primary" className="hidden items-center gap-4 whitespace-nowrap xl:gap-6 lg:flex">
            {navLinks.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <NavLink to="/join" className={`${joinClass} hidden sm:inline-flex`}>
              Join Us
            </NavLink>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-button text-primary-800 lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
              <span className="relative block h-3.5 w-5" aria-hidden="true">
                <span
                  className={`absolute left-0 h-0.5 w-5 bg-current transition duration-200 ${
                    menuOpen ? 'top-1.5 rotate-45' : 'top-0'
                  }`}
                />
                <span
                  className={`absolute top-1.5 left-0 h-0.5 w-5 bg-current transition duration-200 ${
                    menuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute left-0 h-0.5 w-5 bg-current transition duration-200 ${
                    menuOpen ? 'top-1.5 -rotate-45' : 'top-3'
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-primary-900/40 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
          menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      />

      <aside
        id="mobile-nav"
        inert={!menuOpen}
        className={`fixed top-0 right-0 z-[60] flex h-svh w-[min(20.5rem,88vw)] flex-col overflow-hidden bg-white shadow-elevated transition-transform duration-300 ease-out lg:hidden ${
          menuOpen ? 'translate-x-0' : 'pointer-events-none translate-x-full'
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex items-center justify-between border-b border-secondary-200 px-5 py-4">
          <p className="font-heading text-sm font-semibold tracking-[0.18em] text-primary-800">
            MENU
          </p>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-button text-primary-700"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <span className="relative block h-3.5 w-3.5">
              <span className="absolute top-1.5 left-0 h-0.5 w-3.5 rotate-45 bg-current" />
              <span className="absolute top-1.5 left-0 h-0.5 w-3.5 -rotate-45 bg-current" />
            </span>
          </button>
        </div>

        <nav aria-label="Mobile" className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4">
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2.5 text-sm font-medium tracking-wide transition-colors ${
                  isActive
                    ? 'bg-primary-50 text-primary-800'
                    : 'text-primary-800/75 hover:bg-secondary-100 hover:text-primary-800'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-secondary-200 p-4">
          <NavLink
            to="/join"
            onClick={() => setMenuOpen(false)}
            className={`${joinClass} w-full`}
          >
            Join Us
          </NavLink>
        </div>
      </aside>
    </>
  )
}
