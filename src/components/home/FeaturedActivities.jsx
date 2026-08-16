import { Link } from 'react-router-dom'
import { activities } from '../../data/activities'
import ActivityCard from '../ActivityCard'
import { IconArrow } from '../icons'
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
          {activities.slice(0, 4).map((item) => (
            <ActivityCard key={item.id} activity={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
