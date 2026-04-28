import AboutMe from '../../components/AboutMe'
import PageIntro from '../../components/PageIntro'

export const metadata = {
  title: 'About',
  description:
    'Learn about Bibek Poudel, his AI/data science background, full stack experience, and professional web development work.',
}

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title="About Me"
        description="My background in AI, data science, and full stack web development with real project experience."
      />
      <AboutMe />
    </>
  )
}
