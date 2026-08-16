import EventRegistration from '../components/EventRegistration'
import PageHero from '../components/PageHero'

export default function Notice() {
  return (
    <>
      <PageHero
        eyebrow="Notice"
        title="Notices"
        titleBn="নোটিশ"
        description="চলমান ইভেন্ট, নিবন্ধন ও গুরুত্বপূর্ণ ঘোষণা এখানে থাকবে।"
      />
      <EventRegistration />
    </>
  )
}
