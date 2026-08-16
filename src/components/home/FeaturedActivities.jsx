import { Link } from 'react-router-dom'
import { activities } from '../../data/activities'
import { ActivityIcon, IconArrow } from '../icons'
import SectionHeader from '../SectionHeader'

export default function FeaturedActivities() {
  return (
    <section className="bg-white py-section md:py-section-lg">
      <div className="mx-auto max-w-container px-gutter">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="What we do"
            title="Featured activities"
            description="Field work first — education, health, outreach, and the right to be heard."
          />
          <Link
            to="/activities"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 transition-colors hover:text-accent-600"
          >
            All activities
            <IconArrow className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((item) => (
            <Link
              key={item.id}
              to={item.href}
              className="group rounded-card border border-secondary-200/80 bg-secondary-50 p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-primary-200 hover:bg-white hover:shadow-elevated"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-800 text-accent transition-transform duration-300 group-hover:scale-105">
                <ActivityIcon name={item.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-semibold text-primary-800">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-800/65">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
