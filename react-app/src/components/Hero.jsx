import { useEffect, useRef } from 'react'

const HEADLINE = 'Vi lager nettsider som gir bedriften din flere kunder'

export default function Hero() {
  const wordsRef = useRef([])

  useEffect(() => {
    wordsRef.current.forEach((el, i) => {
      if (!el) return
      el.style.animationDelay = `${i * 0.08}s`
      el.classList.add('word-reveal')
    })
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          background: #111;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          text-align: center;
          padding: 6rem 1.5rem 4rem;
        }
        .hero-mesh {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 60% at 20% 30%, #2a2a2a 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 80% 70%, #222 0%, transparent 55%),
            radial-gradient(ellipse 70% 70% at 50% 50%, #1a1a1a 0%, transparent 70%);
          animation: meshShift 20s ease-in-out infinite alternate;
          pointer-events: none;
        }
        @keyframes meshShift {
          0%   { background-position: 0% 0%, 100% 100%, 50% 50%; }
          33%  { background-position: 30% 20%, 70% 80%, 60% 40%; }
          66%  { background-position: 10% 60%, 90% 30%, 40% 70%; }
          100% { background-position: 50% 10%, 50% 90%, 30% 60%; }
        }
        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 860px;
          margin: 0 auto;
        }
        .hero-badge {
          display: inline-block;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 100px;
          padding: 0.35rem 1rem;
          margin-bottom: 2rem;
        }
        .hero-headline {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(2.4rem, 6vw, 4.8rem);
          color: #fff;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin: 0 0 1.5rem;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.3em 0.25em;
        }
        .hero-word {
          display: inline-block;
          opacity: 0;
          transform: translateY(20px);
        }
        .word-reveal {
          animation: wordFade 0.6s ease forwards;
        }
        @keyframes wordFade {
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-sub {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(1rem, 2vw, 1.2rem);
          color: rgba(255,255,255,0.62);
          line-height: 1.65;
          max-width: 560px;
          margin: 0 auto 2.5rem;
        }
        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        .btn-outline-white {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          color: #fff;
          background: transparent;
          border: 2px solid rgba(255,255,255,0.5);
          padding: 0.75rem 1.8rem;
          border-radius: 8px;
          cursor: pointer;
          transition: border-color 0.2s, background 0.2s;
        }
        .btn-outline-white:hover {
          border-color: #fff;
          background: rgba(255,255,255,0.08);
        }
        .btn-solid-white {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          color: #111;
          background: #fff;
          border: 2px solid #fff;
          padding: 0.75rem 1.8rem;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
        }
        .btn-solid-white:hover {
          background: #e8e8e8;
          transform: translateY(-2px);
        }
        .hero-scroll-hint {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
          opacity: 0.35;
          animation: bounce 2s ease-in-out infinite;
        }
        .hero-scroll-hint span {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.72rem;
          color: #fff;
          letter-spacing: 0.08em;
        }
        .hero-scroll-arrow {
          width: 1px;
          height: 32px;
          background: linear-gradient(to bottom, #fff, transparent);
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>

      <section className="hero">
        <div className="hero-mesh" />
        <div className="hero-content">
          <div className="hero-badge">Nettside · SEO · Vekst</div>
          <h1 className="hero-headline">
            {HEADLINE.split(' ').map((word, i) => (
              <span
                key={i}
                className="hero-word"
                ref={el => wordsRef.current[i] = el}
              >
                {word}
              </span>
            ))}
          </h1>
          <p className="hero-sub">
            Vi hjelper bedrifter å vokse på nett med skreddersydde nettsider og smart digital markedsføring.
          </p>
          <div className="hero-buttons">
            <button className="btn-outline-white" onClick={() => scrollTo('pakker')}>
              Se våre pakker
            </button>
            <button className="btn-solid-white" onClick={() => {
              if (typeof window.openWidget === 'function') window.openWidget()
            }}>
              Kom i gang
            </button>
          </div>
        </div>
        <div className="hero-scroll-hint">
          <span>Scroll</span>
          <div className="hero-scroll-arrow" />
        </div>
      </section>
    </>
  )
}
