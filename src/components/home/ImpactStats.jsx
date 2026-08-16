import { useEffect, useRef, useState } from 'react'
import { stats } from '../../data/stats'

function useInView() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return [ref, inView]
}

function useCountUp(target, enabled) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!enabled) return undefined

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      setValue(target)
      return undefined
    }

    const duration = 1400
    const start = performance.now()
    let frame = 0

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setValue(Math.round(target * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [enabled, target])

  return value
}

function StatCard({ value, suffix, label, start }) {
  const count = useCountUp(value, start)

  return (
    <article className="group rounded-card border border-secondary-200/80 bg-white px-5 py-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-elevated sm:px-6 sm:py-7">
      <p className="font-heading text-3xl font-semibold tracking-tight text-primary-800 transition-colors duration-300 group-hover:text-accent-600 md:text-4xl">
        {count.toLocaleString('en-US')}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-medium tracking-wide text-primary-800/60">{label}</p>
      <span className="mt-5 block h-px w-8 bg-accent/70 transition-all duration-300 group-hover:w-14" />
    </article>
  )
}

export default function ImpactStats() {
  const [ref, inView] = useInView()

  return (
    <section ref={ref} className="relative z-10 -mt-8 px-4 pb-2 sm:-mt-12 sm:px-6 lg:-mt-14 lg:px-8">
      <div className="mx-auto grid max-w-container gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        {stats.map((item) => (
          <StatCard key={item.id} {...item} start={inView} />
        ))}
      </div>
    </section>
  )
}
