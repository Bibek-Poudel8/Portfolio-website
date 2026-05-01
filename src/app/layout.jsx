import './globals.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export const metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: {
    default: 'Bibek Poudel | Portfolio',
    template: '%s | Bibek Poudel',
  },
  description:
    'Portfolio of Bibek Poudel, showcasing work in data science, machine learning, deep learning, and AI product development.',
  keywords: [
    'Bibek Poudel',
    'Portfolio',
    'Data Science',
    'Machine Learning',
    'Deep Learning',
    'AI Engineer',
    'Nepal',
  ],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Bibek Poudel | Portfolio',
    description:
      'Explore projects and skills in data science, machine learning, deep learning, and AI web applications.',
    type: 'website',
    images: ['/Website_icon.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bibek Poudel | Portfolio',
    description:
      'Portfolio featuring AI projects, machine learning work, and data-driven web products.',
    images: ['/Website_icon.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-body bg-mist text-ink antialiased">
        <div className="relative isolate min-h-screen overflow-x-clip">
          <div className="pointer-events-none absolute inset-x-0 top-[-8rem] -z-10 h-[40rem] bg-[radial-gradient(circle_at_18%_14%,rgba(14,116,144,0.24),transparent_36%),radial-gradient(circle_at_82%_0%,rgba(14,116,144,0.22),transparent_33%)]" />
          <div className="pointer-events-none absolute bottom-[-15rem] right-[-8rem] -z-10 h-[30rem] w-[30rem] rounded-full bg-cyanwave/10 blur-3xl" />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}