import { site } from '../../data/site'
import Button from '../Button'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero">
      <div className="bg-dot-grid pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-10 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

      <div className="page-wrap relative flex min-h-[26rem] flex-col justify-center py-16 sm:min-h-[30rem] sm:py-20 md:min-h-[34rem] md:pb-28 lg:min-h-[36rem] lg:pb-32">
        <p className="mb-4 text-[0.7rem] font-medium tracking-[0.22em] text-accent-300 uppercase sm:mb-5 sm:text-xs sm:tracking-[0.28em]">
          {site.name}
        </p>
        <h1 className="font-heading max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
          <span className="font-bengali block text-balance">প্রতিটি কণ্ঠে বিপ্লব</span>
          <span className="mt-3 block text-xl font-medium text-secondary-100 sm:text-3xl md:text-4xl">
            {site.tagline}
          </span>
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-secondary-300 sm:mt-6 sm:text-base md:text-lg">
          {site.introEn} Youth-led, community-rooted, and built so no voice is left outside the room.
        </p>
        <div className="mt-8 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
          <Button to="/about" variant="outline" className="w-full sm:w-auto">
            About Us
          </Button>
          <Button to="/join" className="w-full sm:w-auto">
            Join Us
          </Button>
        </div>
      </div>
    </section>
  )
}
