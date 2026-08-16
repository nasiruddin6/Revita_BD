export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
}) {
  const centered = align === 'center'

  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-medium tracking-[0.22em] text-accent-600 uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-heading text-3xl font-semibold text-primary-800 md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-primary-800/65">{description}</p>
      ) : null}
      <span className={`mt-5 block h-px w-14 bg-accent ${centered ? 'mx-auto' : ''}`} />
    </div>
  )
}
