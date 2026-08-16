import { Link } from 'react-router-dom'
import { activityPath } from '../data/activities'
import { ActivityIcon, IconArrow } from './icons'

export default function ActivityCard({ activity }) {
  return (
    <Link
      to={activityPath(activity)}
      className="group flex min-h-11 flex-col rounded-card border border-secondary-200/80 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-elevated sm:p-6"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-800 text-accent transition-transform duration-300 group-hover:scale-105">
        <ActivityIcon name={activity.icon} className="h-5 w-5" />
      </span>
      <h3 className="mt-5 font-heading text-lg font-semibold text-primary-800">
        {activity.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-primary-800/65">
        {activity.description}
      </p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary-700">
        Learn more
        <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      </span>
    </Link>
  )
}
