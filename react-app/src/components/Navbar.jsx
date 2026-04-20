import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleContact = () => {
    setMenuOpen(false)
    if (typeof window.openWidget === 'function') window.openWidget()
  }

  return (
    <>
      <style>{`
        .navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid transparent;
          transition: box-shadow 0.3s, border-color 0.3s, background 0.3s;
        }
        .navbar.scrolled {
          background: rgba(255,255,255,0.96);
          box-shadow: 0 2px 20px rgba(0,0,0,0.08);
          border-bottom-color: #e8e8e8;
        }
        .navbar-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .navbar-logo {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.4rem;
          color: #000;
          text-decoration: none;
          letter-spacing: -0.5px;
        }
        .navbar-links {
          display: flex;
          align-items: center;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .navbar-links a, .navbar-links button.nav-link {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          color: #222;
          text-decoration: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: color 0.2s;
        }
        .navbar-links a:hover, .navbar-links button.nav-link:hover { color: #000; }
        .nav-cta {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.88rem;
          font-weight: 600;
          background: #111;
          color: #fff !important;
          border: none;
          cursor: pointer;
          padding: 0.55rem 1.2rem;
          border-radius: 6px;
          transition: background 0.2s, transform 0.15s;
        }
        .nav-cta:hover { background: #333; transform: translateY(-1px); }
        .hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1.5rem;
          color: #111;
          padding: 0.25rem;
        }
        .mobile-menu {
          display: none;
          flex-direction: column;
          background: rgba(255,255,255,0.98);
          border-top: 1px solid #e8e8e8;
          padding: 1rem 1.5rem 1.5rem;
          gap: 1rem;
        }
        .mobile-menu.open { display: flex; }
        .mobile-menu a, .mobile-menu button.nav-link {
          font-family: 'Montserrat', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          color: #222;
          text-decoration: none;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          padding: 0.4rem 0;
          transition: color 0.2s;
        }
        .mobile-menu a:hover, .mobile-menu button.nav-link:hover { color: #000; }
        .mobile-cta {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          background: #111;
          color: #fff;
          border: none;
          cursor: pointer;
          padding: 0.75rem 1.5rem;
          border-radius: 6px;
          text-align: center;
          margin-top: 0.5rem;
        }
        @media (max-width: 767px) {
          .navbar-links { display: none; }
          .hamburger { display: block; }
        }
      `}</style>

      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo">Sideklar</Link>
          <ul className="navbar-links">
            <li><button className="nav-link" onClick={() => scrollTo('tjenester')}>Tjenester</button></li>
            <li><button className="nav-link" onClick={() => scrollTo('pakker')}>Pakker</button></li>
            <li><Link to="/om-oss">Om oss</Link></li>
            <li><button className="nav-link" onClick={() => scrollTo('referanser')}>Referanser</button></li>
            <li><button className="nav-cta" onClick={handleContact}>Kontakt oss</button></li>
          </ul>
          <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Meny">
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
        <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
          <button className="nav-link" onClick={() => scrollTo('tjenester')}>Tjenester</button>
          <button className="nav-link" onClick={() => scrollTo('pakker')}>Pakker</button>
          <Link to="/om-oss" onClick={() => setMenuOpen(false)}>Om oss</Link>
          <button className="nav-link" onClick={() => scrollTo('referanser')}>Referanser</button>
          <button className="mobile-cta" onClick={handleContact}>Kontakt oss</button>
        </div>
      </nav>
    </>
  )
}
