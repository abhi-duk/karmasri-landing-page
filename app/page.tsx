import Header from '@/components/header'
import Hero from '@/components/hero'
import Announcements from '@/components/announcements'
import ServiceFlags from '@/components/service-flags'
import Features from '@/components/features'
import Mottos from '@/components/mottos'
import Stats from '@/components/stats'
import CTA from '@/components/cta'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background pb-32">
      <Header />
      <Hero />
      <Announcements />
      <ServiceFlags />
      <Features />
      <Mottos />
      <Stats />
      <CTA />
      <Footer />
    </main>
  )
}
