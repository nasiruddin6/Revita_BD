import { Link } from 'react-router-dom'
import { activities, activityPath } from '../data/activities'
import { quickLinks, site, socialLinks, telHref } from '../data/site'
import Logo from './Logo'
import { IconMail, IconPhone, IconPin, SocialIcon } from './icons'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative mt-auto bg-primary-900 text-secondary-200">
      <div className="h-0.5 w-full bg-linear-to-r from-primary-700 via-accent to-primary-700" />

      <div className="page-wrap grid gap-10 py-12 sm:py-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:py-16">
        <div className="min-w-0 max-w-xs">
          <Logo inverted />
          <p className="mt-5 font-bengali text-sm leading-relaxed text-secondary-300">
            {site.intro}
          </p>
          <p className="mt-2 text-xs tracking-wide text-secondary-400">{site.tagline}</p>
          <div className="mt-5 flex flex-wrap items-center gap-2.5">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.name}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-secondary-200 transition duration-200 hover:border-accent/60 hover:bg-white/5 hover:text-accent"
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
                className="inline-flex min-h-11 items-center text-sm text-secondary-300 transition-colors hover:text-accent"
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
                to={activityPath(item)}
                className="inline-flex min-h-11 items-center text-sm text-secondary-300 transition-colors hover:text-accent"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </FooterColumn>

        <div className="min-w-0">
          <h2 className="font-heading text-sm font-semibold tracking-[0.18em] text-white uppercase">
            Contact
          </h2>
          <ul className="mt-4 space-y-1">
            <li className="flex min-h-11 gap-3 py-2 text-sm text-secondary-300">
              <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span className="min-w-0 break-words">{site.contact.address}</span>
            </li>
            <li>
              <a
                href={telHref(site.contact.phone)}
                className="flex min-h-11 gap-3 py-2 text-sm text-secondary-300 transition-colors hover:text-accent"
              >
                <IconPhone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="min-w-0 break-words">{site.contact.phone}</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.contact.email}`}
                className="flex min-h-11 gap-3 py-2 text-sm text-secondary-300 transition-colors hover:text-accent"
              >
                <IconMail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="min-w-0 break-all">{site.contact.email}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="page-wrap flex flex-col items-center justify-between gap-2 py-5 text-center text-xs tracking-wide text-secondary-500 sm:flex-row sm:text-left">
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
      <ul className="mt-2 space-y-0.5">{children}</ul>
    </div>
  )
}
