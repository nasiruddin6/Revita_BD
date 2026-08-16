import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { site } from '../data/site'

export default function Logo({ compact = false, inverted = false }) {
  return (
    <Link
      to="/"
      className="group flex min-w-0 items-center gap-2 rounded-sm sm:gap-3 focus-visible:shadow-focus"
      aria-label={`${site.name} home`}
    >
      <img
        src={logo}
        alt=""
        className={`w-auto shrink-0 object-contain ${compact ? 'h-10 sm:h-11 md:h-12' : 'h-14 sm:h-16 md:h-20'}`}
      />
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={`font-heading font-bold tracking-[0.08em] sm:tracking-[0.14em] ${
            compact ? 'text-base sm:text-lg md:text-xl' : 'text-xl sm:text-2xl'
          } ${inverted ? 'text-white' : 'text-primary-800'}`}
        >
          {site.shortName}
        </span>
        <span
          className={`mt-1 font-medium uppercase tracking-[0.18em] sm:tracking-[0.22em] ${
            compact ? 'hidden text-[0.62rem] min-[380px]:block' : 'text-[0.65rem] sm:text-[0.7rem]'
          } ${inverted ? 'text-accent-300' : 'text-primary-600'}`}
        >
          Bangladesh
        </span>
      </span>
    </Link>
  )
}
