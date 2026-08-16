import PageHero from '../components/PageHero'
import { IconMail, IconPhone, IconPin } from '../components/icons'
import { site, telHref } from '../data/site'

const details = [
  {
    label: 'Phone',
    value: site.contact.phone,
    href: telHref(site.contact.phone),
    icon: IconPhone,
  },
  {
    label: 'Email',
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
    icon: IconMail,
  },
  {
    label: 'Address',
    value: site.contact.address,
    href: null,
    icon: IconPin,
  },
]

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact"
        titleBn="যোগাযোগ"
        description="Reach REVITA Bangladesh by phone, email, or at our office in Tejgaon."
      />

      <section className="bg-secondary-50 py-section md:py-section-lg">
        <div className="mx-auto grid max-w-container gap-5 px-gutter md:grid-cols-3">
          {details.map((item) => {
            const Icon = item.icon
            const content = (
              <>
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-800 text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-5 text-xs font-medium tracking-[0.2em] text-accent-600 uppercase">
                  {item.label}
                </p>
                <p className="mt-2 font-heading text-lg font-semibold text-primary-800 break-words">
                  {item.value}
                </p>
              </>
            )

            const className =
              'rounded-card border border-secondary-200/80 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-elevated'

            if (item.href) {
              return (
                <a key={item.label} href={item.href} className={className}>
                  {content}
                </a>
              )
            }

            return (
              <div key={item.label} className={className}>
                {content}
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
