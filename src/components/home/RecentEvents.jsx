import { Link } from 'react-router-dom'
import { eventDateParts, events } from '../../data/events'
import { IconArrow, IconPin } from '../icons'
import SectionHeader from '../SectionHeader'

export default function RecentEvents() {
  return (
    <section className="section-y bg-secondary-50">
      <div className="page-wrap">
        <div className="flex flex-col gap-4 sm:gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="On the ground"
            title="Recent events"
            description="A snapshot of the latest programmes, forums, and relief work."
          />
          <Link
            to="/news"
            className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-medium text-primary-700 transition-colors hover:text-accent-600"
          >
            All news
            <IconArrow className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-3">
          {events.slice(0, 3).map((item) => {
            const { day, month } = eventDateParts(item.date)
            return (
              <Link
                key={item.id}
                to={item.href}
                className="group flex min-h-11 flex-col rounded-card border border-secondary-200/80 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-elevated sm:p-6"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <time
                    dateTime={item.date}
                    className="flex w-12 shrink-0 flex-col items-center rounded-lg bg-primary-800 py-2 text-center sm:w-14"
                  >
                    <span className="font-heading text-lg font-semibold leading-none text-white sm:text-xl">
                      {day}
                    </span>
                    <span className="mt-1 text-[0.65rem] font-medium tracking-[0.14em] text-accent-300">
                      {month}
                    </span>
                  </time>
                  <div className="min-w-0">
                    <h3 className="font-heading text-base font-semibold text-primary-800 transition-colors group-hover:text-primary-700 sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-1 flex items-center gap-1.5 text-xs text-primary-800/55">
                      <IconPin className="h-3.5 w-3.5 shrink-0" />
                      {item.location}
                    </p>
                  </div>
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-primary-800/65">
                  {item.excerpt}
                </p>
                <span className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary-700">
                  Read more
                  <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
