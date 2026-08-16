import { Link } from 'react-router-dom'
import { activities } from '../data/activities'
import { quickLinks, site, socialLinks } from '../data/site'
import Logo from './Logo'
import { IconMail, IconPhone, IconPin, SocialIcon } from './icons'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative mt-auto bg-primary-900 text-secondary-200">
      <div className="h-0.5 w-full bg-linear-to-r from-primary-700 via-accent to-primary-700" />

      <div className="mx-auto grid max-w-container gap-10 px-gutter py-section-sm md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div className="max-w-xs">
          <Logo inverted />
          <p className="mt-5 font-bengali text-sm leading-relaxed text-secondary-300">
            {site.intro}
          </p>
          <p className="mt-2 text-xs tracking-wide text-secondary-400">{site.tagline}</p>
          <div className="mt-5 flex items-center gap-2.5">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.name}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-secondary-200 transition duration-200 hover:border-accent/60 hover:bg-white/5 hover:text-accent"
              >
                <SocialIcon name={item.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterColumn title="Quick links">
          {quickLinks.map((item) => (
            <li key={item.label}>
              <Link
                to={item.to}
                className="text-sm text-secondary-300 transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="Activities">
          {activities.map((item) => (
            <li key={item.id}>
              <Link
                to={item.href}
                className="text-sm text-secondary-300 transition-colors hover:text-accent"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </FooterColumn>

        <div>
          <h2 className="font-heading text-sm font-semibold tracking-[0.18em] text-white uppercase">
            Contact
          </h2>
          <ul className="mt-4 space-y-3.5">
            <li className="flex gap-3 text-sm text-secondary-300">
              <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{site.contact.address}</span>
            </li>
            <li>
              <a
                href={`tel:${site.contact.phone.replace(/\s/g, '')}`}
                className="flex gap-3 text-sm text-secondary-300 transition-colors hover:text-accent"
              >
                <IconPhone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {site.contact.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.contact.email}`}
                className="flex gap-3 text-sm text-secondary-300 transition-colors hover:text-accent"
              >
                <IconMail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {site.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-container flex-col items-center justify-between gap-2 px-gutter py-5 text-center text-xs tracking-wide text-secondary-500 sm:flex-row sm:text-left">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="uppercase tracking-[0.16em]">{site.tagline}</p>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, children }) {
  return (
    <div>
      <h2 className="font-heading text-sm font-semibold tracking-[0.18em] text-white uppercase">
        {title}
      </h2>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  )
}
