import { activities } from '../data/activities'
import ActivityCard from '../components/ActivityCard'
import PageHero from '../components/PageHero'
import SectionHeader from '../components/SectionHeader'

export default function Activities() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Activities"
        titleBn="আমাদের কাজ"
        description="Four lines of work — outreach, education, health, and advocacy — each built to be returned to, not staged once."
      />

      <section className="section-y bg-secondary-50">
        <div className="page-wrap">
          <SectionHeader
            eyebrow="Programmes"
            title="Choose a line of work"
            description="Open any card for the full story, photographs, and a way to join that work."
          />
          <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5">
            {activities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
