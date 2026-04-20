import { useEffect, useRef } from 'react'

const SERVICES = [
  {
    icon: '🌐',
    title: 'Nettside',
    desc: 'Skreddersydde nettsider som konverterer besøkende til kunder. Rask, mobilvennlig og designet for resultater.',
  },
  {
    icon: '🔍',
    title: 'SEO',
    desc: 'Bli funnet på Google av de som leter etter det du tilbyr. Vi optimaliserer innhold, teknisk struktur og lokal søk.',
  },
  {
    icon: '🔧',
    title: 'Vedlikehold',
    desc: 'Vi holder nettsiden din oppdatert, sikker og rask — slik at du kan fokusere på det du gjør best.',
  },
]

export default function Services() {
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.15 }
    )
    cardsRef.current.forEach(el => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{`
        .services {
          padding: 6rem 1.5rem;
          background: #fff;
        }
        .section-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #888;
          text-align: center;
          margin-bottom: 0.75rem;
        }
        .section-title {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: clamp(2rem, 4vw, 2.8rem);
          color: #000;
          text-align: center;
          margin: 0 0 1rem;
          letter-spacing: -0.02em;
        }
        .section-subtitle {
          font-family: 'Montserrat', sans-serif;
          font-size: 1rem;
          color: #666;
          text-align: center;
          max-width: 480px;
          margin: 0 auto 3.5rem;
          line-height: 1.6;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          max-width: 1100px;
          margin: 0 auto;
        }
        .service-card {
          background: #fff;
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          padding: 2.2rem 2rem;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.55s ease, transform 0.55s ease, box-shadow 0.3s, border-color 0.3s;
        }
        .service-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .service-card:nth-child(2) { transition-delay: 0.1s; }
        .service-card:nth-child(3) { transition-delay: 0.2s; }
        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.1);
          border-color: #ccc;
        }
        .service-icon {
          font-size: 2.2rem;
          margin-bottom: 1.2rem;
          display: block;
        }
        .service-title {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1.25rem;
          color: #000;
          margin: 0 0 0.75rem;
        }
        .service-desc {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.93rem;
          color: #555;
          line-height: 1.65;
          margin: 0;
        }
      `}</style>

      <section className="services" id="tjenester">
        <p className="section-label">Hva vi gjør</p>
        <h2 className="section-title">Hva vi tilbyr</h2>
        <p className="section-subtitle">Alt du trenger for å lykkes på nett — under ett tak.</p>
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className="service-card"
              ref={el => cardsRef.current[i] = el}
            >
              <span className="service-icon">{s.icon}</span>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
