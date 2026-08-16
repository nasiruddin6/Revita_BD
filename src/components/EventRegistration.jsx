import { IconExternal } from './icons'

const GOOGLE_FORM_LINK = 'https://forms.gle/VmoR6Ahz4be2wWzh6'

export default function EventRegistration({
  heading = 'আমাদের আসন্ন ইভেন্টে রেজিস্ট্রেশন করুন',
  description = 'একটি ফর্ম পূরণ করেই পরবর্তী কর্মসূচিতে যুক্ত হোন। সময়, স্থান ও বিস্তারিত ফর্মেই পাবেন।',
}) {
  return (
    <section className="section-y relative overflow-hidden bg-primary-800">
      <div className="bg-dot-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -top-20 left-10 h-56 w-56 rounded-full bg-accent/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 -bottom-16 h-48 w-48 rounded-full bg-white/5 blur-3xl" />

      <div className="page-wrap relative text-center">
        <p className="text-xs font-medium tracking-[0.24em] text-accent-300 uppercase">
          Event registration
        </p>
        <h2 className="font-heading font-bengali mt-4 text-2xl font-semibold text-balance text-white sm:text-3xl md:text-4xl">
          {heading}
        </h2>
        <p className="font-bengali mx-auto mt-4 max-w-lg text-sm leading-relaxed text-secondary-200 md:text-base">
          {description}
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href={GOOGLE_FORM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-button bg-accent px-6 py-3 text-base font-semibold tracking-wide text-primary-900 shadow-cta transition duration-200 hover:-translate-y-px hover:bg-accent-400 sm:w-auto sm:min-w-72"
          >
            রেজিস্ট্রেশন করুন
            <IconExternal className="h-4 w-4 shrink-0" />
          </a>
        </div>
      </div>
    </section>
  )
}
