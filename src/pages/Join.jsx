import { useSearchParams } from 'react-router-dom'
import InquiryForm from '../components/InquiryForm'
import PageHero from '../components/PageHero'

export default function Join() {
  const [params] = useSearchParams()
  const activity = params.get('activity') ?? ''

  return (
    <>
      <PageHero
        eyebrow="Volunteer"
        title="Join Us"
        titleBn="স্বেচ্ছাসেবক হোন"
        description="Give time, skill, and a willingness to return. We will place you with a programme that fits."
      />

      <section className="section-y bg-secondary-50">
        <div className="page-wrap grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-start lg:gap-16">
          <div className="min-w-0">
            <p className="text-xs font-medium tracking-[0.22em] text-accent-600 uppercase">Volunteer form</p>
            <h2 className="font-heading mt-3 text-2xl font-semibold text-primary-800 sm:text-3xl">
              Tell us about yourself
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-primary-800/65 sm:text-base">
              Fill this in on your phone or at a desk — we only need a name, a way to reach you, and where you want to stand.
            </p>
          </div>
          <div className="rounded-card border border-secondary-200/80 bg-white p-5 shadow-soft sm:p-8">
            <InquiryForm type="volunteer" defaultInterest={activity} submitLabel="Submit application" />
          </div>
        </div>
      </section>
    </>
  )
}
