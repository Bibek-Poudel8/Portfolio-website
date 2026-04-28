import PageIntro from '../../components/PageIntro'
import Skills from '../../components/Skills'

export const metadata = {
  title: 'Skills',
  description:
    'Explore Bibek Poudel\'s skills in machine learning, data science, MERN stack, Next.js, and WordPress development.',
}

export default function SkillsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Skills"
        title="Skills"
        description="Technologies, tools, and workflow I use in AI projects and full stack web development."
      />
      <Skills />
    </>
  )
}
