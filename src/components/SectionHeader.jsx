export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
}) {
  const centered = align === 'center'

  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl min-w-0'}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-medium tracking-[0.22em] text-accent-600 uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-heading text-2xl font-semibold text-balance text-primary-800 sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-sm leading-relaxed text-primary-800/65 sm:text-base">{description}</p>
      ) : null}
      <span className={`mt-5 block h-px w-14 bg-accent ${centered ? 'mx-auto' : ''}`} />
    </div>
  )
}
