import InquiryForm from '../components/InquiryForm'
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

      <section className="section-y bg-secondary-50">
        <div className="page-wrap grid gap-4 md:grid-cols-3 md:gap-5">
          {details.map((item) => {
            const Icon = item.icon
            const content = (
              <>
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-800 text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-4 text-xs font-medium tracking-[0.2em] text-accent-600 uppercase sm:mt-5">
                  {item.label}
                </p>
                <p className="mt-2 font-heading text-base font-semibold break-words text-primary-800 sm:text-lg">
                  {item.value}
                </p>
              </>
            )

            const className =
              'min-h-11 rounded-card border border-secondary-200/80 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-elevated sm:p-6'

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

      <section className="section-y bg-white">
        <div className="page-wrap grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-start lg:gap-16">
          <div className="min-w-0">
            <p className="text-xs font-medium tracking-[0.22em] text-accent-600 uppercase">Write to us</p>
            <h2 className="font-heading mt-3 text-2xl font-semibold text-primary-800 sm:text-3xl">
              Send a message
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-primary-800/65 sm:text-base">
              Tell us how we can help — a question, a partnership, or a neighbourhood that needs a visit.
            </p>
          </div>
          <InquiryForm type="contact" submitLabel="Send message" />
        </div>
      </section>
    </>
  )
}
