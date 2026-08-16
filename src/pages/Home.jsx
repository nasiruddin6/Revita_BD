import FeaturedActivities from '../components/home/FeaturedActivities'
import Hero from '../components/home/Hero'
import ImpactStats from '../components/home/ImpactStats'
import RecentEvents from '../components/home/RecentEvents'
import VolunteerCta from '../components/home/VolunteerCta'

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <FeaturedActivities />
      <RecentEvents />
      <VolunteerCta />
    </>
  )
}
