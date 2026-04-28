import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import { projects, webProjectsSummary } from './content'

const Project = () => {
  return (
    <section className="section-shell py-16 sm:py-24">
      <div className="glass-card p-6 sm:p-10">
        <h2 className="section-title text-center">Selected Projects</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
          A few projects that show my work in recommendation systems and retrieval-based applications.
        </p>
        <div className="mt-10 space-y-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl md:grid-cols-2 md:p-8"
            >
              <div className="overflow-hidden rounded-2xl border border-slate-100">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  width={960}
                  height={540}
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <h3 className="font-display text-2xl font-semibold text-slate-800">
                  {project.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-600">{project.description}</p>
                <ul className="mt-4 space-y-2 text-slate-600">
                  {project.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sunrise" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 rounded-xl bg-slate-50 p-3 text-sm text-slate-700">
                  <span className="font-semibold">Impact:</span> {project.impact}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-900"
                  >
                    View GitHub
                  </a>
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-cyanwave px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-700"
                    >
                      Live Demo
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 text-slate-600">
          <span className="font-medium">Explore all other projects</span>
          <a
            href="https://github.com/Bibek-Poudel8"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-300 bg-white p-2.5 transition hover:border-slate-400 hover:text-ink"
            aria-label="GitHub profile"
          >
            <FaGithub size={18} />
          </a>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="font-display text-xl font-semibold text-slate-800">Other Web Development Work</h3>
          <ul className="mt-4 space-y-2 text-slate-600">
            {webProjectsSummary.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyanwave" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Project
