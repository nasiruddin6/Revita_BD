import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { site } from '../data/site'

export default function Logo({ compact = false, inverted = false }) {
  return (
    <Link
      to="/"
      className="group flex items-center gap-3 rounded-sm focus-visible:shadow-focus"
      aria-label={`${site.name} home`}
    >
      <img
        src={logo}
        alt=""
        className={`w-auto object-contain ${compact ? 'h-11 md:h-12' : 'h-[4.5rem] md:h-20'}`}
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-heading font-bold tracking-[0.14em] ${
            compact ? 'text-lg md:text-xl' : 'text-2xl'
          } ${inverted ? 'text-white' : 'text-primary-800'}`}
        >
          {site.shortName}
        </span>
        <span
          className={`mt-1 font-medium uppercase tracking-[0.22em] ${
            compact ? 'text-[0.62rem]' : 'text-[0.7rem]'
          } ${inverted ? 'text-accent-300' : 'text-primary-600'}`}
        >
          Bangladesh
        </span>
      </span>
    </Link>
  )
}
