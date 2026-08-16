import { Link } from 'react-router-dom'

const variants = {
  accent:
    'bg-accent text-primary-900 shadow-cta hover:-translate-y-px hover:bg-accent-400',
  primary:
    'bg-primary-800 text-white shadow-soft hover:-translate-y-px hover:bg-primary-700',
  outline:
    'border border-white/40 bg-transparent text-white hover:border-white hover:bg-white/10',
  ghost:
    'border border-primary-700/20 bg-white text-primary-800 hover:border-primary-700/40 hover:bg-primary-50',
}

export default function Button({ to, variant = 'accent', children, className = '' }) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center rounded-button px-5 py-2.5 text-sm font-semibold tracking-wide transition duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  )
}
