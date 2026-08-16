import PageHero from '../components/PageHero'

export default function ComingSoon({ eyebrow, title, titleBn, description }) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} titleBn={titleBn} description={description} />
      <section className="section-y bg-secondary-50">
        <div className="page-wrap">
          <div className="mx-auto max-w-lg rounded-card border border-secondary-200/80 bg-white px-5 py-10 text-center shadow-soft sm:px-8 sm:py-12">
            <p className="text-xs font-medium tracking-[0.22em] text-accent-600 uppercase">Coming soon</p>
            <h2 className="font-heading mt-3 text-xl font-semibold text-primary-800 sm:text-2xl">
              This page is being prepared
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-primary-800/65">
              Photographs, names, and stories will live here shortly. Meanwhile the rest of the site is open.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
