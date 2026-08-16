import { site } from '../../data/site'
import Button from '../Button'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero">
      <div className="bg-dot-grid pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-10 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto flex min-h-[32rem] max-w-container flex-col justify-center px-gutter py-section-lg md:min-h-[36rem] md:pb-32">
        <p className="mb-5 text-xs font-medium tracking-[0.28em] text-accent-300 uppercase">
          {site.name}
        </p>
        <h1 className="font-heading max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
          <span className="font-bengali block">প্রতিটি কণ্ঠে বিপ্লব</span>
          <span className="mt-3 block text-2xl font-medium text-secondary-100 sm:text-3xl md:text-4xl">
            {site.tagline}
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-secondary-300 md:text-lg">
          {site.introEn} Youth-led, community-rooted, and built so no voice is left outside the room.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Button to="/about" variant="outline">
            About Us
          </Button>
          <Button to="/join">Join Us</Button>
        </div>
      </div>
    </section>
  )
}
