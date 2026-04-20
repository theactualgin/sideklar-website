import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Services from '../components/Services.jsx'
import Packages from '../components/Packages.jsx'
import Stats from '../components/Stats.jsx'
import References from '../components/References.jsx'
import Footer from '../components/Footer.jsx'
import ChatWidget from '../components/ChatWidget.jsx'
import CookieBanner from '../components/CookieBanner.jsx'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Packages />
      <Stats />
      <References />
      <Footer />
      <ChatWidget />
      <CookieBanner />
    </>
  )
}
