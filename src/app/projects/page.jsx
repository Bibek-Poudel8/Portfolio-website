import PageIntro from '../../components/PageIntro'
import Project from '../../components/Project'

export const metadata = {
  title: 'Projects',
  description:
    'Review selected AI and machine learning projects by Bibek Poudel along with broader full stack web development work.',
}

export default function ProjectsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Projects"
        title="Projects"
        description="Selected AI projects and additional web development work with practical outcomes."
      />
      <Project />
    </>
  )
}
