import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('cookieAccepted') !== 'true') {
      // small delay so it doesn't flash instantly
      const t = setTimeout(() => setVisible(true), 800)
      return () => clearTimeout(t)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookieAccepted', 'true')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <>
      <style>{`
        .cookie-banner {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 999;
          background: #1a1a1a;
          color: #fff;
          padding: 1rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
          box-shadow: 0 -4px 20px rgba(0,0,0,0.2);
          animation: slideUp 0.35s ease;
        }
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        .cookie-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.88rem;
          color: rgba(255,255,255,0.8);
          margin: 0;
          flex: 1;
          min-width: 200px;
        }
        .cookie-accept {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.88rem;
          font-weight: 700;
          background: #fff;
          color: #111;
          border: none;
          padding: 0.55rem 1.3rem;
          border-radius: 6px;
          cursor: pointer;
          white-space: nowrap;
          transition: background 0.2s;
          flex-shrink: 0;
        }
        .cookie-accept:hover { background: #e8e8e8; }
      `}</style>

      <div className="cookie-banner">
        <p className="cookie-text">
          Vi bruker informasjonskapsler for å forbedre din opplevelse.
        </p>
        <button className="cookie-accept" onClick={accept}>Godta</button>
      </div>
    </>
  )
}
