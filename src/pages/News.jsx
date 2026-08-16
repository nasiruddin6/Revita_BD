import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { eventDateParts, events } from '../data/events'
import { IconArrow, IconPin } from '../components/icons'

export default function News() {
  return (
    <>
      <PageHero
        eyebrow="News"
        title="News"
        titleBn="সংবাদ"
        description="Recent programmes, forums, and relief work from the field."
      />
      <section className="section-y bg-secondary-50">
        <div className="page-wrap grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {events.map((item) => {
            const { day, month } = eventDateParts(item.date)
            return (
              <article
                key={item.id}
                className="flex flex-col rounded-card border border-secondary-200/80 bg-white p-5 shadow-soft sm:p-6"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <time
                    dateTime={item.date}
                    className="flex w-12 shrink-0 flex-col items-center rounded-lg bg-primary-800 py-2 text-center sm:w-14"
                  >
                    <span className="font-heading text-lg font-semibold leading-none text-white">{day}</span>
                    <span className="mt-1 text-[0.65rem] font-medium tracking-[0.14em] text-accent-300">
                      {month}
                    </span>
                  </time>
                  <div className="min-w-0">
                    <h2 className="font-heading text-base font-semibold text-primary-800 sm:text-lg">
                      {item.title}
                    </h2>
                    <p className="mt-1 flex items-center gap-1.5 text-xs text-primary-800/55">
                      <IconPin className="h-3.5 w-3.5 shrink-0" />
                      {item.location}
                    </p>
                  </div>
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-primary-800/65">{item.excerpt}</p>
                <Link
                  to={item.href}
                  className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary-700"
                >
                  Read more
                  <IconArrow className="h-4 w-4" />
                </Link>
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}
