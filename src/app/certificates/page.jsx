import Certificates from '../../components/Certificates'
import PageIntro from '../../components/PageIntro'

export const metadata = {
  title: 'Certificates',
  description:
    'Browse Bibek Poudel\'s certificates and copy or share each certificate link from a dedicated portfolio section.',
}

export default function CertificatesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Certificates"
        title="Certificates"
        description="Selected achievements and training certificates"
      />
      <Certificates />
    </>
  )
}