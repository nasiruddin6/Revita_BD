import Button from '../Button'

export default function VolunteerCta() {
  return (
    <section className="relative overflow-hidden bg-accent py-section md:py-section-lg">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgb(255_255_255/0.22),transparent_55%)]" />

      <div className="relative mx-auto max-w-container px-gutter text-center">
        <p className="text-xs font-medium tracking-[0.24em] text-primary-800/70 uppercase">
          Volunteer with us
        </p>
        <h2 className="font-heading font-bengali mt-4 text-3xl font-semibold text-primary-900 md:text-4xl">
          আপনিও পরিবর্তনের অংশ হোন
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-primary-900/75 md:text-base">
          One voice, one pair of hands. Join REVITA Bangladesh and stand with communities
          working for justice and dignity.
        </p>
        <div className="mt-8">
          <Button to="/join" variant="primary">
            Join Us
          </Button>
        </div>
      </div>
    </section>
  )
}
