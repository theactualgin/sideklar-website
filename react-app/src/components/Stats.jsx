import { useEffect, useRef, useState } from 'react'

const STATS = [
  { target: 30, suffix: '+', label: 'Nettsider levert' },
  { target: 100, suffix: '%', label: 'Fornøyde kunder' },
  { target: 2, suffix: '', label: 'År med erfaring' },
  { target: 24, suffix: '/7', label: 'Support' },
]

function useCounter(target, duration, active) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let start = null
    const step = (timestamp) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [active, target, duration])

  return count
}

function StatItem({ stat, active }) {
  const count = useCounter(stat.target, 2000, active)
  return (
    <div className="stat-item">
      <div className="stat-number">{count}{stat.suffix}</div>
      <div className="stat-label">{stat.label}</div>
    </div>
  )
}

export default function Stats() {
  const sectionRef = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{`
        .stats {
          padding: 5rem 1.5rem;
          background: #111;
          color: #fff;
        }
        .stats-inner {
          max-width: 1000px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 2rem;
          text-align: center;
        }
        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }
        .stat-number {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(2.8rem, 6vw, 4rem);
          color: #fff;
          line-height: 1;
          letter-spacing: -0.03em;
        }
        .stat-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.88rem;
          font-weight: 500;
          color: rgba(255,255,255,0.5);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .stat-divider {
          width: 1px;
          background: rgba(255,255,255,0.1);
        }
        @media (max-width: 600px) {
          .stat-divider { display: none; }
        }
      `}</style>

      <section className="stats" ref={sectionRef}>
        <div className="stats-inner">
          {STATS.map((stat, i) => (
            <StatItem key={i} stat={stat} active={active} />
          ))}
        </div>
      </section>
    </>
  )
}
