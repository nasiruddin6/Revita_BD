import { useState } from 'react'

const fieldClass =
  'mt-1.5 min-h-11 w-full rounded-input border border-secondary-300 bg-white px-3 text-base text-primary-900 outline-none transition-colors placeholder:text-primary-800/35 focus:border-primary-600'

export default function InquiryForm({
  type = 'contact',
  defaultInterest = '',
  submitLabel = 'Send message',
}) {
  const [sent, setSent] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="rounded-card border border-primary-200 bg-primary-50 px-5 py-8 text-center">
        <p className="font-heading text-lg font-semibold text-primary-800">Thank you</p>
        <p className="mt-2 text-sm leading-relaxed text-primary-800/70">
          We have received your details. A volunteer will get back to you soon.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block text-sm font-medium text-primary-800">
        Full name
        <input name="name" type="text" required autoComplete="name" className={fieldClass} />
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-primary-800">
          Email
          <input name="email" type="email" required autoComplete="email" className={`${fieldClass} break-all`} />
        </label>
        <label className="block text-sm font-medium text-primary-800">
          Phone
          <input name="phone" type="tel" autoComplete="tel" className={fieldClass} />
        </label>
      </div>

      {type === 'volunteer' ? (
        <label className="block text-sm font-medium text-primary-800">
          I want to help with
          <select name="interest" defaultValue={defaultInterest} className={fieldClass}>
            <option value="">Any programme</option>
            <option value="community-outreach">Community Outreach</option>
            <option value="education-support">Education Support</option>
            <option value="health-wellbeing">Health & Wellbeing</option>
            <option value="advocacy-rights">Advocacy & Rights</option>
          </select>
        </label>
      ) : null}

      <label className="block text-sm font-medium text-primary-800">
        Message
        <textarea name="message" rows={4} required className={`${fieldClass} min-h-28 py-2.5`} />
      </label>

      <button
        type="submit"
        className="inline-flex min-h-11 w-full items-center justify-center rounded-button bg-accent px-5 py-2.5 text-sm font-semibold tracking-wide text-primary-900 shadow-cta transition duration-200 hover:-translate-y-px hover:bg-accent-400 sm:w-auto"
      >
        {submitLabel}
      </button>
    </form>
  )
}
