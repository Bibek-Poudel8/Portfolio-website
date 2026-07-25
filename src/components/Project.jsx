import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import { projects, webProjectsSummary } from './content'

const Project = () => {
  return (
    <section className="section-shell py-20 sm:py-28 relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyanwave/5 via-transparent to-transparent opacity-50" />
      
      <div className="glass-card p-6 sm:p-12 md:p-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* <span className="inline-block py-1.5 px-4 rounded-full bg-cyanwave/10 text-cyanwave text-sm font-bold mb-4 tracking-wide uppercase">Portfolio</span> */}
          <h2 className="section-title">Featured Projects</h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            A selection of my recent work in Machine Learning and modern web development.
          </p>
        </div>

        <div className="columns-1 lg:columns-2 gap-8 md:gap-12 mb-16">
          {projects.map((project) => (
            <article
              key={project.title}
              className="break-inside-avoid mb-8 md:mb-12 group flex flex-col rounded-[2.5rem] bg-white shadow-sm ring-1 ring-slate-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyanwave/10 overflow-hidden"
            >
              {/* Image Banner */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[2/1] lg:aspect-[16/11] overflow-hidden bg-slate-50 border-b border-slate-100">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              {/* Content Section */}
              <div className="flex flex-col flex-1 p-6 sm:p-10">
                <div className="mb-6">
                  <h3 className="font-display text-2xl font-bold text-slate-900 tracking-tight transition-colors group-hover:text-cyanwave">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>
                </div>

                <ul className="mb-8 space-y-3">
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-700">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-sunrise" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-3 leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="rounded-2xl bg-slate-50 p-5 border border-slate-100 mb-8 mt-auto transition-colors group-hover:bg-cyanwave/5 group-hover:border-cyanwave/20">
                  <p className="text-sm text-slate-700">
                    <span className="font-bold text-slate-900 block mb-1">Impact & Outcome</span>
                    {project.impact}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white border border-slate-200 px-4 py-1.5 text-xs font-semibold text-slate-600 shadow-sm transition-all duration-300 group-hover:border-cyanwave/30 group-hover:text-cyanwave group-hover:shadow"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-slate-800 hover:shadow-lg hover:shadow-ink/20 hover:-translate-y-0.5 focus:ring-2 focus:ring-ink focus:ring-offset-2"
                  >
                    <FaGithub className="mr-2 text-lg" />
                    Source Code
                  </a>
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyanwave to-cyan-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-cyanwave/30 hover:-translate-y-0.5 focus:ring-2 focus:ring-cyanwave focus:ring-offset-2"
                    >
                      Live Demo
                      <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mb-6 sm:mb-8 flex max-w-3xl items-center justify-center gap-3 sm:gap-4 text-slate-600">
          <span className="text-base sm:text-lg font-medium tracking-tight text-slate-600">Explore all other projects</span>
          <a
            href="https://github.com/Bibek-Poudel8"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="group flex h-12 w-12 items-center justify-center rounded-full border-2 border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-300 hover:border-cyanwave hover:text-cyanwave hover:shadow-md sm:h-14 sm:w-14"
          >
            <FaGithub className="text-xl transition-transform duration-300 group-hover:scale-110 sm:text-2xl" />
          </a>
        </div>

        <div className="mx-auto max-w-5xl rounded-[2rem] border border-slate-200 bg-white px-6 py-6 sm:px-8 sm:py-8 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-800 mb-5 sm:mb-6">
            Other Web Development Work
          </h3>
          <ul className="space-y-4 sm:space-y-5 text-slate-600 text-sm sm:text-base leading-relaxed">
            {webProjectsSummary.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 sm:gap-4">
                <span className="mt-[0.45rem] h-2.5 w-2.5 shrink-0 rounded-full bg-cyanwave sm:h-3 sm:w-3" />
                <span className="flex-1">{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}

export default Project
