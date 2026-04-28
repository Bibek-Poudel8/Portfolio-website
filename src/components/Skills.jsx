import { skills, toolsAndPlatforms, } from './content'

const Skills = () => {
  return (
    <section className="section-shell py-16 sm:py-24">
      <div className="glass-card p-6 sm:p-10">
        <h2 className="section-title text-center">Skills and Tools</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
          This page covers the technologies I use in AI/data projects and full stack web development.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {skills.map((group, index) => (
            <article
              key={group.category}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-cyanwave/30 hover:shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="font-display text-xl font-semibold text-slate-800">{group.category}</h3>
              <ul className="mt-4 space-y-2 text-slate-600">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyanwave" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>



        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="font-display text-xl font-semibold text-slate-800">Tools I Use Often</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {toolsAndPlatforms.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
