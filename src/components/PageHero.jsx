export default function PageHero({ eyebrow, title, titleBn, description, children }) {
  return (
    <section className="relative overflow-hidden bg-hero">
      <div className="bg-dot-grid pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute -top-16 right-0 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />

      <div className="page-wrap relative py-12 sm:py-16 md:py-20 lg:py-24">
        {eyebrow ? (
          <p className="mb-4 text-xs font-medium tracking-[0.28em] text-accent-300 uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="font-heading max-w-3xl text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl md:text-5xl">
          {titleBn ? (
            <span className="font-bengali mb-2 block text-2xl sm:text-3xl md:text-4xl">{titleBn}</span>
          ) : null}
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-secondary-300 sm:mt-5 sm:text-base md:text-lg">
            {description}
          </p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  )
}
