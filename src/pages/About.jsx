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

      <section className="bg-secondary-50 py-section md:py-section-lg">
        <div className="mx-auto grid max-w-container items-center gap-10 px-gutter lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeader eyebrow="Our story" title={about.intro.title} />
            <div className="mt-8 space-y-4">
              {about.intro.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="text-base leading-relaxed text-primary-800/70">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <img
            src={aboutCover}
            alt="REVITA Bangladesh members"
            className="h-full min-h-72 w-full rounded-card object-cover object-center shadow-card md:min-h-[22rem]"
          />
        </div>
      </section>

      <section className="bg-white py-section md:py-section-lg">
        <div className="mx-auto max-w-container px-gutter">
          <SectionHeader
            eyebrow="What guides us"
            title="Vision & mission"
            description="Two commitments we return to when a programme has to choose a direction."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <article className="rounded-card border border-secondary-200/80 bg-secondary-50 p-8 shadow-soft">
              <p className="text-xs font-medium tracking-[0.2em] text-accent-600 uppercase">
                {about.vision.title}
              </p>
              <h2 className="font-heading mt-3 text-2xl font-semibold text-primary-800">
                Where we are headed
              </h2>
              <p className="mt-4 text-base leading-relaxed text-primary-800/70">{about.vision.text}</p>
            </article>
            <article className="rounded-card border border-primary-800/10 bg-primary-800 p-8 shadow-card">
              <p className="text-xs font-medium tracking-[0.2em] text-accent-300 uppercase">
                {about.mission.title}
              </p>
              <h2 className="font-heading mt-3 text-2xl font-semibold text-white">
                How we walk there
              </h2>
              <p className="mt-4 text-base leading-relaxed text-secondary-200">{about.mission.text}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-secondary-50 py-section md:py-section-lg">
        <div className="mx-auto max-w-container px-gutter">
          <SectionHeader
            eyebrow="Since the first circle"
            title="Our history"
            description="A short line of years — from a volunteer meeting to a public organisation."
          />

          <ol className="mt-14 space-y-8">
            {about.history.map((item) => (
              <li
                key={item.year}
                className="grid grid-cols-[4.5rem_1rem_1fr] gap-x-4 md:grid-cols-[5.5rem_1rem_1fr] md:gap-x-6"
              >
                <div className="pt-6 text-right">
                  <span className="font-heading text-lg font-semibold text-accent-600">
                    {item.year}
                  </span>
                </div>
                <div className="relative">
                  <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-primary-200" />
                  <span className="absolute top-7 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-white bg-accent shadow-soft" />
                </div>
                <article className="rounded-card border border-secondary-200/80 bg-white p-6 shadow-soft md:p-7">
                  <h3 className="font-heading text-lg font-semibold text-primary-800">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-800/65">{item.text}</p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white py-section md:py-section-lg">
        <div className="mx-auto max-w-container px-gutter">
          <SectionHeader
            eyebrow="What we work toward"
            title="Objectives"
            description="The checklist we hold ourselves to — not a slogan wall."
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {about.objectives.map((item) => (
              <li
                key={item.title}
                className="flex gap-4 rounded-card border border-secondary-200/80 bg-secondary-50 p-5"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-800 text-accent">
                  <IconCheck className="h-4 w-4" />
                </span>
                <div>
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
