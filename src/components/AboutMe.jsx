import Image from 'next/image'
import Link from 'next/link'
import { aboutStory, education, expertiseAreas, interests, workExperience } from './content'

const AboutMe = () => {
    return (
        <section className="section-shell py-16 sm:py-24">
            <div className="grid items-start gap-8 md:grid-cols-[1.05fr_0.95fr]">
                <article className="glass-card p-6 sm:p-10">
                    <h2 className="section-title text-cyanwave">About Me</h2>
                    <p className="mt-5 leading-relaxed text-slate-700">{aboutStory.intro}</p>
                    <p className="mt-4 leading-relaxed text-slate-700">{aboutStory.detail}</p>

                    <div className="mt-7">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">What I Focus On</p>
                        <ul className="mt-3 space-y-2 text-slate-700">
                            {expertiseAreas.map((area) => (
                                <li key={area} className="flex gap-2">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyanwave" />
                                    <span>{area}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link
                            href="/projects"
                            className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-900"
                        >
                            Explore Projects
                        </Link>
                        <Link
                            href="/contact"
                            className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
                        >
                            Work With Me
                        </Link>
                    </div>
                </article>

                <aside className="glass-card p-8 text-center">
                    <div className="mx-auto h-48 w-48 overflow-hidden rounded-full border-4 border-white shadow-lg">
                        <Image
                            src="/Bibek Poudel02_pp.jpg"
                            alt="Portrait of Bibek Poudel"
                            width={192}
                            height={192}
                            className="h-full w-full object-cover object-top"
                            priority
                        />
                    </div>
                    <p className="mt-2 text-lg font-semibold text-slate-700">
                        I want to build useful products across AI and modern web development that solve practical problems.
                    </p>

                    <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm">
                        <p className="text-sm font-semibold text-slate-700">Currently Exploring</p>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                            Advanced retrieval systems, scalable web architecture, and production-ready full stack workflows.
                        </p>
                    </div>
                </aside>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
                <article className="rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm sm:p-8">
                    <h3 className="font-display text-2xl font-semibold text-slate-800">Education</h3>
                    <div className="mt-4 space-y-4">
                        {education.map((item) => (
                            <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-4">
                                <p className="text-sm font-semibold text-slate-800">{item.title}</p>
                                <p className="mt-1 text-sm text-slate-600">{item.detail}</p>
                            </div>
                        ))}
                    </div>
                </article>

                <article className="rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm sm:p-8">
                    <h3 className="font-display text-2xl font-semibold text-slate-800">Current Interests</h3>
                    <ul className="mt-4 space-y-2 text-slate-700">
                        {interests.map((item) => (
                            <li key={item} className="flex gap-2">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sunrise" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </article>

                <article className="rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm sm:p-8">
                    <h3 className="font-display text-2xl font-semibold text-slate-800">Experience</h3>
                    <div className="mt-4 space-y-4">
                        {workExperience.map((item) => (
                            <div key={item.role} className="rounded-2xl border border-slate-200 bg-white p-4">
                                <p className="text-sm font-semibold text-slate-800">{item.role}</p>
                                <p className="mt-1 text-sm text-slate-600">{item.detail}</p>
                            </div>
                        ))}
                    </div>
                </article>
            </div>
        </section>
    )
}

export default AboutMe
