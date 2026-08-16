import { site } from '../data/site'

export default function PagePlaceholder({ title }) {
  return (
    <section className="mx-auto flex min-h-[72vh] max-w-container flex-col justify-center px-gutter py-section">
      <p className="mb-3 text-xs font-medium tracking-[0.22em] text-accent-600 uppercase">
        {site.name}
      </p>
      <h1 className="font-heading text-4xl font-semibold text-primary-800 md:text-5xl">
        {title}
      </h1>
      <span className="mt-6 h-px w-16 bg-accent" />
    </section>
  )
}
