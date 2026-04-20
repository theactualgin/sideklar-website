export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <style>{`
        .footer {
          background: #111;
          color: #fff;
          padding: 4rem 1.5rem 0;
        }
        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr;
          gap: 3rem;
        }
        .footer-brand h3 {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1.6rem;
          color: #fff;
          margin: 0 0 0.6rem;
          letter-spacing: -0.02em;
        }
        .footer-brand p {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.9rem;
          color: rgba(255,255,255,0.45);
          margin: 0;
          line-height: 1.6;
          max-width: 260px;
        }
        .footer-col h4 {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.85rem;
          color: rgba(255,255,255,0.4);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin: 0 0 1rem;
        }
        .footer-col ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .footer-col ul li a,
        .footer-col ul li button {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.9rem;
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: color 0.2s;
          text-align: left;
        }
        .footer-col ul li a:hover,
        .footer-col ul li button:hover { color: #fff; }
        .footer-col .footer-contact-item {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.88rem;
          color: rgba(255,255,255,0.5);
          line-height: 1.6;
          margin: 0 0 0.4rem;
        }
        .footer-contact-item a {
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-contact-item a:hover { color: #fff; }
        .footer-bottom {
          max-width: 1200px;
          margin: 3rem auto 0;
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: 1.5rem 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .footer-bottom p {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.3);
          margin: 0;
        }
        @media (max-width: 767px) {
          .footer-inner {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <h3>Sideklar</h3>
            <p>Vi lager nettsider som gir resultater. Rask levering, profesjonelt resultat.</p>
          </div>

          <div className="footer-col">
            <h4>Navigasjon</h4>
            <ul>
              <li><button onClick={() => scrollTo('tjenester')}>Tjenester</button></li>
              <li><button onClick={() => scrollTo('pakker')}>Pakker</button></li>
              <li><a href="/om-oss">Om oss</a></li>
              <li><button onClick={() => scrollTo('referanser')}>Referanser</button></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Kontakt</h4>
            <p className="footer-contact-item">Org.nr: 935 843 215</p>
            <p className="footer-contact-item">
              <a href="mailto:noahlie2004@gmail.com">noahlie2004@gmail.com</a>
            </p>
            <p className="footer-contact-item">Oslo, Norge</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Sideklar. Alle rettigheter forbeholdt.</p>
          <p>Laget med ❤ i Oslo</p>
        </div>
      </footer>
    </>
  )
}
