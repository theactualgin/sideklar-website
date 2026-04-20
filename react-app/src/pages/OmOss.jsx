import { useEffect, useRef } from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import ChatWidget from '../components/ChatWidget.jsx'
import CookieBanner from '../components/CookieBanner.jsx'

export default function OmOss() {
  const paraRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    paraRefs.current.forEach(el => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{`
        .omoss-hero {
          background: #111;
          color: #fff;
          padding: 6rem 1.5rem 5rem;
          text-align: center;
        }
        .omoss-hero h1 {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          margin: 0 0 1rem;
          letter-spacing: -0.03em;
          color: #fff;
        }
        .omoss-hero p {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.1rem;
          color: rgba(255,255,255,0.55);
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.65;
        }
        .omoss-content {
          background: #fff;
          padding: 5rem 1.5rem 6rem;
        }
        .omoss-inner {
          max-width: 760px;
          margin: 0 auto;
        }
        .omoss-eyebrow {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #888;
          margin-bottom: 0.75rem;
        }
        .omoss-inner h2 {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: clamp(1.9rem, 4vw, 2.6rem);
          color: #000;
          margin: 0 0 2.5rem;
          letter-spacing: -0.02em;
        }
        .omoss-para {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.02rem;
          color: #444;
          line-height: 1.8;
          margin: 0 0 1.5rem;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        .omoss-para.visible { opacity: 1; transform: translateY(0); }
        .omoss-para:nth-child(2) { transition-delay: 0.1s; }
        .omoss-para:nth-child(3) { transition-delay: 0.2s; }
        .omoss-divider {
          width: 48px;
          height: 3px;
          background: #111;
          margin: 2.5rem 0;
          border-radius: 2px;
        }
        .omoss-cta-block {
          margin-top: 3rem;
          padding: 2.5rem;
          background: #f9f9f9;
          border-radius: 14px;
          border: 1px solid #e8e8e8;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.55s ease 0.3s, transform 0.55s ease 0.3s;
        }
        .omoss-cta-block.visible { opacity: 1; transform: translateY(0); }
        .omoss-cta-block h3 {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1.3rem;
          color: #000;
          margin: 0 0 0.6rem;
        }
        .omoss-cta-block p {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.92rem;
          color: #666;
          margin: 0 0 1.2rem;
          line-height: 1.6;
        }
        .omoss-cta-btn {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          background: #111;
          color: #fff;
          border: none;
          padding: 0.75rem 1.6rem;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
        }
        .omoss-cta-btn:hover { background: #333; transform: translateY(-2px); }
        .omoss-values {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 1rem;
          margin: 2.5rem 0;
        }
        .value-card {
          background: #f9f9f9;
          border-radius: 10px;
          padding: 1.2rem 1rem;
          border: 1px solid #eee;
        }
        .value-icon { font-size: 1.5rem; margin-bottom: 0.5rem; display: block; }
        .value-title {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          color: #111;
          margin: 0 0 0.25rem;
        }
        .value-desc {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.8rem;
          color: #777;
          margin: 0;
          line-height: 1.5;
        }
      `}</style>

      <Navbar />

      <section className="omoss-hero">
        <h1>Om oss</h1>
        <p>Vi er et ungt og dedikert team som hjelper bedrifter å lykkes på nett.</p>
      </section>

      <section className="omoss-content">
        <div className="omoss-inner">
          <p className="omoss-eyebrow">Vår historie</p>
          <h2>Vi er Sideklar</h2>

          <p className="omoss-para" ref={el => paraRefs.current[0] = el}>
            Sideklar ble grunnlagt med én ambisjon: å gjøre profesjonell nettstedbygging tilgjengelig for alle bedrifter, uansett størrelse. Vi så at for mange gode bedrifter hadde nettsider som ikke reflekterte kvaliteten på tjenestene de tilbød — og bestemte oss for å gjøre noe med det.
          </p>

          <p className="omoss-para" ref={el => paraRefs.current[1] = el}>
            Vi kombinerer moderne design, rask teknologi og smart SEO for å lage nettsider som faktisk jobber for bedriften din — ikke bare ser fine ut. Hvert prosjekt er skreddersydd fra bunn av, med fokus på konvertering og brukeropplevelse.
          </p>

          <p className="omoss-para" ref={el => paraRefs.current[2] = el}>
            Vår tilnærming er enkel: vi lytter, vi leverer, og vi er der for deg etter lansering. Fra idé til ferdig nettside på rekordtid — uten lange byråprosesser og uten skjulte kostnader.
          </p>

          <div className="omoss-divider" />

          <div className="omoss-values">
            <div className="value-card">
              <span className="value-icon">⚡</span>
              <p className="value-title">Rask levering</p>
              <p className="value-desc">Ferdig nettside på 3–14 dager</p>
            </div>
            <div className="value-card">
              <span className="value-icon">🎯</span>
              <p className="value-title">Resultatfokus</p>
              <p className="value-desc">Design som konverterer besøkende</p>
            </div>
            <div className="value-card">
              <span className="value-icon">🤝</span>
              <p className="value-title">Ærlighet</p>
              <p className="value-desc">Ingen skjulte kostnader eller overraskelser</p>
            </div>
          </div>

          <div className="omoss-cta-block" ref={el => paraRefs.current[3] = el}>
            <h3>Bli en del av vår reise</h3>
            <p>Klar for en nettside som faktisk leverer resultater? Ta kontakt i dag — det koster ingenting å snakke med oss.</p>
            <button
              className="omoss-cta-btn"
              onClick={() => { if (typeof window.openWidget === 'function') window.openWidget() }}
            >
              Start samtalen →
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
      <CookieBanner />
    </>
  )
}
