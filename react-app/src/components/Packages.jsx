import { useEffect, useRef } from 'react'

const FEATURES = [
  'Responsivt design',
  'SSL-sikkerhet',
  'Kontaktskjema',
  'SEO-grunnpakke',
  'Google Analytics',
  'Blogg/nyheter',
  'Bookingsystem',
  'Nettbutikk',
]

const PACKAGES = [
  {
    name: 'Enkel',
    tagline: 'Perfekt for å komme i gang',
    included: [true, true, true, true, false, false, false, false],
    dark: false,
  },
  {
    name: 'Profesjonell',
    tagline: 'Mest populær — for voksende bedrifter',
    included: [true, true, true, true, true, true, false, false],
    dark: true,
  },
  {
    name: 'Premium',
    tagline: 'Alt du trenger for full vekst',
    included: [true, true, true, true, true, true, true, true],
    dark: false,
  },
]

export default function Packages() {
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    cardsRef.current.forEach(el => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{`
        .packages {
          padding: 6rem 1.5rem;
          background: #f9f9f9;
        }
        .packages-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
          gap: 1.5rem;
          max-width: 1100px;
          margin: 0 auto;
          align-items: start;
        }
        .pkg-card {
          border-radius: 16px;
          padding: 2.2rem 2rem;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.55s ease, transform 0.55s ease, box-shadow 0.3s;
          position: relative;
        }
        .pkg-card.visible { opacity: 1; transform: translateY(0); }
        .pkg-card:nth-child(2) { transition-delay: 0.1s; }
        .pkg-card:nth-child(3) { transition-delay: 0.2s; }
        .pkg-card.light {
          background: #fff;
          border: 1px solid #e0e0e0;
          color: #222;
        }
        .pkg-card.dark-pkg {
          background: #111;
          border: 1px solid #111;
          color: #fff;
          transform: translateY(-8px) scale(1.02);
        }
        .pkg-card.dark-pkg.visible {
          transform: translateY(-8px) scale(1.02);
        }
        .pkg-card.light:hover { box-shadow: 0 12px 36px rgba(0,0,0,0.09); }
        .pkg-card.dark-pkg:hover { box-shadow: 0 20px 50px rgba(0,0,0,0.3); }
        .pkg-badge {
          display: inline-block;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.3rem 0.75rem;
          border-radius: 100px;
          margin-bottom: 1rem;
          background: rgba(255,255,255,0.15);
          color: rgba(255,255,255,0.7);
        }
        .pkg-badge.light-badge {
          background: #f0f0f0;
          color: #888;
        }
        .pkg-name {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1.6rem;
          margin: 0 0 0.4rem;
          letter-spacing: -0.02em;
        }
        .pkg-tagline {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.88rem;
          margin: 0 0 1.8rem;
          opacity: 0.65;
          line-height: 1.5;
        }
        .pkg-features {
          list-style: none;
          margin: 0 0 2rem;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .pkg-feature {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.9rem;
        }
        .pkg-feature.included { opacity: 1; }
        .pkg-feature.excluded { opacity: 0.4; text-decoration: line-through; }
        .feat-icon { font-size: 0.9rem; flex-shrink: 0; }
        .pkg-btn {
          width: 100%;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          padding: 0.85rem;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          border: 2px solid;
        }
        .pkg-btn.dark-btn {
          background: #fff;
          color: #111;
          border-color: #fff;
        }
        .pkg-btn.dark-btn:hover { background: #e8e8e8; transform: translateY(-2px); }
        .pkg-btn.light-btn {
          background: #111;
          color: #fff;
          border-color: #111;
        }
        .pkg-btn.light-btn:hover { background: #333; transform: translateY(-2px); }
        .popular-ribbon {
          position: absolute;
          top: -1px;
          right: 1.5rem;
          background: #fff;
          color: #111;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.3rem 0.7rem;
          border-radius: 0 0 6px 6px;
        }
      `}</style>

      <section className="packages" id="pakker">
        <p className="section-label">Priser</p>
        <h2 className="section-title">Velg din pakke</h2>
        <p className="section-subtitle">Ingen skjulte kostnader — velg den pakken som passer best for din bedrift.</p>
        <div className="packages-grid">
          {PACKAGES.map((pkg, i) => (
            <div
              key={i}
              className={`pkg-card ${pkg.dark ? 'dark-pkg' : 'light'}`}
              ref={el => cardsRef.current[i] = el}
            >
              {pkg.dark && <span className="popular-ribbon">Mest populær</span>}
              <span className={`pkg-badge ${pkg.dark ? '' : 'light-badge'}`}>{pkg.name}</span>
              <h3 className="pkg-name">{pkg.name}</h3>
              <p className="pkg-tagline">{pkg.tagline}</p>
              <ul className="pkg-features">
                {FEATURES.map((feat, j) => (
                  <li key={j} className={`pkg-feature ${pkg.included[j] ? 'included' : 'excluded'}`}>
                    <span className="feat-icon">{pkg.included[j] ? '✓' : '✗'}</span>
                    {feat}
                  </li>
                ))}
              </ul>
              <button
                className={`pkg-btn ${pkg.dark ? 'dark-btn' : 'light-btn'}`}
                onClick={() => { if (typeof window.openWidget === 'function') window.openWidget() }}
              >
                Kom i gang
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
