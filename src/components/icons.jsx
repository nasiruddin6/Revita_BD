export function IconFacebook({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z" />
    </svg>
  )
}

export function IconInstagram({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  )
}

export function IconYoutube({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M22.5 7.2a3.2 3.2 0 0 0-2.2-2.3C18.4 4.5 12 4.5 12 4.5s-6.4 0-8.3.4A3.2 3.2 0 0 0 1.5 7.2 33 33 0 0 0 1 12a33 33 0 0 0 .5 4.8 3.2 3.2 0 0 0 2.2 2.3c1.9.4 8.3.4 8.3.4s6.4 0 8.3-.4a3.2 3.2 0 0 0 2.2-2.3A33 33 0 0 0 23 12a33 33 0 0 0-.5-4.8zM10 15.5v-7l6 3.5-6 3.5z" />
    </svg>
  )
}

export function IconX({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.6 3.5h2.8l-6.1 7 7.2 9.5h-5.6l-4.4-5.8-5 5.8H3.6l6.6-7.5-7-9H8.9l4 5.3 4.7-5.3zm-1 15h1.5L7.5 5.4H5.8l10.8 13.1z" />
    </svg>
  )
}

export function IconPin({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

export function IconPhone({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M8.2 3.8h3.1l.9 3.6-2.1 1.1a11.5 11.5 0 0 0 5.4 5.4l1.1-2.1 3.6.9v3.1c0 1.2-1 2.2-2.2 2.1C8.8 18.4 4.6 14.2 3.1 6c-.1-1.2.9-2.2 2.1-2.2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconMail({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  )
}

const socialIcons = {
  facebook: IconFacebook,
  instagram: IconInstagram,
  youtube: IconYoutube,
  x: IconX,
}

export function SocialIcon({ name, className }) {
  const Icon = socialIcons[name]
  if (!Icon) return null
  return <Icon className={className} />
}

export function IconOutreach({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <circle cx="9" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16" cy="8.5" r="1.8" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M4.5 18.5c.4-3 2.3-4.8 4.5-4.8s4.1 1.8 4.5 4.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M13.2 16.2c.6-1.7 2-2.7 3.5-2.7 1.6 0 3 1.1 3.4 3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function IconEducation({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M3.5 9.5 12 5l8.5 4.5L12 14 3.5 9.5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 11.2v4.3c0 .4.9 1.7 5.5 2.7 4.6-1 5.5-2.3 5.5-2.7v-4.3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconHealth({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M12 20s-7-4.4-7-10.2C5 6.6 7.2 5 9.4 5c1.4 0 2.4.7 2.6 1.7C12.2 5.7 13.2 5 14.6 5 16.8 5 19 6.6 19 9.8 19 15.6 12 20 12 20z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconAdvocacy({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d="M4 14.5h3.2V20H4v-5.5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path
        d="M7.2 15.2 14 8.8l3.2 1.2-6.5 6.8H7.2v-1.6z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M14.4 8.4 17 5.8l2.4.9-2.5 2.6-2.5-.9z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  )
}

export function IconArrow({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const activityIcons = {
  outreach: IconOutreach,
  education: IconEducation,
  health: IconHealth,
  advocacy: IconAdvocacy,
}

export function ActivityIcon({ name, className }) {
  const Icon = activityIcons[name]
  if (!Icon) return null
  return <Icon className={className} />
}
