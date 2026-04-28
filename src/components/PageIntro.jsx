const PageIntro = ({ eyebrow, title, description }) => {
  return (
    <section className="section-shell pt-28 sm:pt-36">
      <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm backdrop-blur-xl sm:p-9">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyanwave">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-ink sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">{description}</p>
      </div>
    </section>
  )
}

export default PageIntro
