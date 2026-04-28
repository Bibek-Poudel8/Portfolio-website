import Contact from '../../components/Contact'
import PageIntro from '../../components/PageIntro'

export const metadata = {
  title: 'Contact',
  description:
    'Connect with Bibek Poudel for good-fit roles in AI, data science, and full stack web development.',
}

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Contact Me"
        description="Reach out for roles or collaborations that are a strong fit for skills, work quality, and growth."
      />
      <Contact />
    </>
  )
}
