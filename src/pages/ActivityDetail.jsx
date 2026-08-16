import { Link, useParams } from 'react-router-dom'
import { activities, activityPath, getActivityBySlug } from '../data/activities'
import Button from '../components/Button'
import ImagePlaceholder from '../components/ImagePlaceholder'
import PageHero from '../components/PageHero'
import { IconArrow } from '../components/icons'

export default function ActivityDetail() {
  const { slug } = useParams()
  const activity = getActivityBySlug(slug)

  if (!activity) {
    return (
      <section className="mx-auto flex min-h-[60vh] max-w-container flex-col justify-center px-gutter py-section">
        <p className="text-xs font-medium tracking-[0.22em] text-accent-600 uppercase">Activities</p>
        <h1 className="font-heading mt-3 text-4xl font-semibold text-primary-800">Not found</h1>
        <p className="mt-4 max-w-md text-primary-800/65">
          This programme is not on the list. It may have been renamed, or the link is out of date.
        </p>
        <div className="mt-8">
          <Button to="/activities" variant="primary">
            All activities
          </Button>
        </div>
      </section>
    )
  }

  const related = activities.filter((item) => item.slug !== activity.slug).slice(0, 2)

  return (
    <>
      <PageHero eyebrow="Activities" title={activity.title} description={activity.description} />

      <article className="bg-secondary-50 py-section md:py-section-lg">
        <div className="mx-auto max-w-container px-gutter">
          <Link
            to="/activities"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 transition-colors hover:text-accent-600"
          >
            <IconArrow className="h-4 w-4 rotate-180" />
            All activities
          </Link>

          <ImagePlaceholder
            label={activity.title}
            className="mt-8 aspect-16/9 min-h-56 rounded-card shadow-card"
          />

          <div className="mx-auto mt-12 max-w-prose space-y-4">
            {activity.body.map((paragraph) => (
              <p key={paragraph.slice(0, 28)} className="text-base leading-relaxed text-primary-800/75">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>

      <section className="bg-white py-section md:py-section-lg">
        <div className="mx-auto max-w-container px-gutter">
          <p className="text-xs font-medium tracking-[0.22em] text-accent-600 uppercase">Gallery</p>
          <h2 className="font-heading mt-3 text-3xl font-semibold text-primary-800">From the field</h2>
          <span className="mt-5 block h-px w-14 bg-accent" />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {activity.gallery.map((image) => (
              <ImagePlaceholder
                key={image.id}
                label={image.alt}
                className="aspect-4/3 rounded-card"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-accent py-section md:py-section-lg">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgb(255_255_255/0.22),transparent_55%)]" />
        <div className="relative mx-auto max-w-container px-gutter text-center">
          <h2 className="font-heading font-bengali text-3xl font-semibold text-primary-900 md:text-4xl">
            এই কাজে যুক্ত হতে চাই
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-primary-900/75 md:text-base">
            Stand with this programme as a volunteer — time, skill, and a willingness to return.
          </p>
          <div className="mt-8">
            <Button to={`/join?activity=${activity.slug}`} variant="primary">
              Join this work
            </Button>
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="bg-secondary-50 py-section">
          <div className="mx-auto max-w-container px-gutter">
            <h2 className="font-heading text-xl font-semibold text-primary-800">Other programmes</h2>
            <ul className="mt-6 flex flex-wrap gap-3">
              {related.map((item) => (
                <li key={item.id}>
                  <Link
                    to={activityPath(item)}
                    className="inline-flex rounded-button border border-secondary-300 bg-white px-4 py-2 text-sm font-medium text-primary-800 transition-colors hover:border-primary-300 hover:text-primary-700"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </>
  )
}
