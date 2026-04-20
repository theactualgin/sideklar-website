import { useEffect, useRef } from 'react'

const REFS = [
  {
    name: 'Kari Olsen',
    title: 'Daglig leder',
    quote: 'Sideklar leverte en nettside som faktisk gir oss nye kunder hver uke. Utrolig fornøyd!',
    initials: 'KO',
  },
  {
    name: 'Lars Bakke',
    title: 'Eier',
    quote: 'Profesjonelt, raskt og til riktig pris. Anbefaler Sideklar til alle som vil vokse på nett.',
    initials: 'LB',
  },
  {
    name: 'Marte Haugen',
    title: 'Gründer',
    quote: 'Fra idé til ferdig nettside på under to uker. Imponerende arbeid og god kommunikasjon.',
    initials: 'MH',
  },
]

export default function References() {
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
        .references {
          padding: 6rem 1.5rem;
          background: #fff;
        }
        .refs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          max-width: 1100px;
          margin: 0 auto;
        }
        .ref-card {
          background: #fff;
          border: 1px solid #e8e8e8;
          border-radius: 14px;
          padding: 2rem;
          box-shadow: 0 2px 12px rgba(0,0,0,0.04);
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.55s ease, transform 0.55s ease, box-shadow 0.3s;
          position: relative;
        }
        .ref-card.visible { opacity: 1; transform: translateY(0); }
        .ref-card:nth-child(2) { transition-delay: 0.12s; }
        .ref-card:nth-child(3) { transition-delay: 0.24s; }
        .ref-card:hover { box-shadow: 0 10px 30px rgba(0,0,0,0.09); }
        .quote-mark {
          font-family: Georgia, serif;
          font-size: 4rem;
          color: #e0e0e0;
          line-height: 0.5;
          margin-bottom: 1rem;
          display: block;
          font-style: normal;
        }
        .ref-quote {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.96rem;
          color: #333;
          line-height: 1.7;
          margin: 0 0 1.5rem;
          font-style: italic;
        }
        .ref-author {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .ref-avatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: #111;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.8rem;
          flex-shrink: 0;
        }
        .ref-name {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 0.9rem;
          color: #111;
          margin: 0;
        }
        .ref-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.78rem;
          color: #888;
          margin: 0;
        }
        .stars {
          color: #111;
          font-size: 0.75rem;
          margin-bottom: 0.75rem;
          letter-spacing: 0.1em;
        }
      `}</style>

      <section className="references" id="referanser">
        <p className="section-label">Tilbakemeldinger</p>
        <h2 className="section-title">Hva kundene sier</h2>
        <p className="section-subtitle">Vi måles på resultatene vi leverer — ikke bare nettsidene vi lager.</p>
        <div className="refs-grid">
          {REFS.map((r, i) => (
            <div key={i} className="ref-card" ref={el => cardsRef.current[i] = el}>
              <span className="stars">★★★★★</span>
              <span className="quote-mark">&ldquo;</span>
              <p className="ref-quote">{r.quote}</p>
              <div className="ref-author">
                <div className="ref-avatar">{r.initials}</div>
                <div>
                  <p className="ref-name">{r.name}</p>
                  <p className="ref-title">{r.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
