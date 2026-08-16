import { about } from '../data/about'
import aboutCover from '../assets/about-cover.png'
import PageHero from '../components/PageHero'
import SectionHeader from '../components/SectionHeader'
import { IconCheck } from '../components/icons'

export default function About() {
  return (
    <>
      <PageHero
        eyebrow={about.hero.eyebrow}
        title={about.hero.title}
        titleBn={about.hero.titleBn}
        description={about.hero.description}
      />

      <section className="section-y bg-secondary-50">
        <div className="page-wrap grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="min-w-0">
            <SectionHeader eyebrow="Our story" title={about.intro.title} />
            <div className="mt-6 space-y-4 sm:mt-8">
              {about.intro.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="text-sm leading-relaxed text-primary-800/70 sm:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <img
            src={aboutCover}
            alt="REVITA Bangladesh members"
            className="h-56 w-full rounded-card object-cover object-center shadow-card sm:h-72 md:h-80 lg:h-full lg:min-h-[22rem]"
          />
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="page-wrap">
          <SectionHeader
            eyebrow="What guides us"
            title="Vision & mission"
            description="Two commitments we return to when a programme has to choose a direction."
          />
          <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2">
            <article className="rounded-card border border-secondary-200/80 bg-secondary-50 p-5 shadow-soft sm:p-8">
              <p className="text-xs font-medium tracking-[0.2em] text-accent-600 uppercase">
                {about.vision.title}
              </p>
              <h2 className="font-heading mt-3 text-xl font-semibold text-primary-800 sm:text-2xl">
                Where we are headed
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-primary-800/70 sm:text-base">{about.vision.text}</p>
            </article>
            <article className="rounded-card border border-primary-800/10 bg-primary-800 p-5 shadow-card sm:p-8">
              <p className="text-xs font-medium tracking-[0.2em] text-accent-300 uppercase">
                {about.mission.title}
              </p>
              <h2 className="font-heading mt-3 text-xl font-semibold text-white sm:text-2xl">
                How we walk there
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-secondary-200 sm:text-base">{about.mission.text}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-y bg-secondary-50">
        <div className="page-wrap">
          <SectionHeader
            eyebrow="Since the first circle"
            title="Our history"
            description="A short line of years — from a volunteer meeting to a public organisation."
          />

          <ol className="mt-10 space-y-6 sm:mt-14 sm:space-y-8">
            {about.history.map((item) => (
              <li
                key={item.year}
                className="grid grid-cols-[3.5rem_0.75rem_1fr] gap-x-3 sm:grid-cols-[4.5rem_1rem_1fr] sm:gap-x-4 md:grid-cols-[5.5rem_1rem_1fr] md:gap-x-6"
              >
                <div className="pt-5 text-right sm:pt-6">
                  <span className="font-heading text-sm font-semibold text-accent-600 sm:text-lg">
                    {item.year}
                  </span>
                </div>
                <div className="relative">
                  <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-primary-200" />
                  <span className="absolute top-6 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-white bg-accent shadow-soft sm:top-7" />
                </div>
                <article className="min-w-0 rounded-card border border-secondary-200/80 bg-white p-4 shadow-soft sm:p-6 md:p-7">
                  <h3 className="font-heading text-base font-semibold text-primary-800 sm:text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-800/65">{item.text}</p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="page-wrap">
          <SectionHeader
            eyebrow="What we work toward"
            title="Objectives"
            description="The checklist we hold ourselves to — not a slogan wall."
          />
          <ul className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4">
            {about.objectives.map((item) => (
              <li
                key={item.title}
                className="flex gap-3 rounded-card border border-secondary-200/80 bg-secondary-50 p-4 sm:gap-4 sm:p-5"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-800 text-accent">
                  <IconCheck className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-heading text-base font-semibold text-primary-800">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-primary-800/65">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
