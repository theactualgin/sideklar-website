import { useState, useEffect } from 'react'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState(1)
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    window.openWidget = () => setIsOpen(true)
    return () => { delete window.openWidget }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    // Reset after close animation
    setTimeout(() => {
      setStep(1)
      setName('')
      setCompany('')
      setMessage('')
    }, 300)
  }

  const handleSubmit = async () => {
    setSubmitting(true)
    try {
      await fetch('https://formspree.io/f/mvzdgkge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, company, message }),
      })
    } catch (e) {
      // fail silently — show success regardless
    }
    setSubmitting(false)
    setStep(4)
  }

  return (
    <>
      <style>{`
        .chat-btn {
          position: fixed;
          bottom: 1.5rem;
          right: 1.5rem;
          z-index: 9999;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #111;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.25);
          transition: transform 0.2s, background 0.2s;
        }
        .chat-btn:hover { background: #333; transform: scale(1.08); }
        .chat-card {
          position: fixed;
          bottom: 5rem;
          right: 1.5rem;
          z-index: 9998;
          width: 340px;
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 16px 60px rgba(0,0,0,0.18);
          overflow: hidden;
          transform: scale(0.92) translateY(12px);
          opacity: 0;
          pointer-events: none;
          transition: transform 0.25s ease, opacity 0.25s ease;
          transform-origin: bottom right;
        }
        .chat-card.open {
          transform: scale(1) translateY(0);
          opacity: 1;
          pointer-events: all;
        }
        .chat-header {
          background: #111;
          padding: 1.1rem 1.2rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          position: relative;
        }
        .chat-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #333;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.85rem;
          flex-shrink: 0;
          position: relative;
        }
        .online-dot {
          position: absolute;
          bottom: 1px;
          right: 1px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #22c55e;
          border: 2px solid #111;
        }
        .chat-meta h4 {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          color: #fff;
          margin: 0;
        }
        .chat-meta p {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          color: rgba(255,255,255,0.55);
          margin: 0;
        }
        .chat-close {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: rgba(255,255,255,0.5);
          font-size: 1.1rem;
          cursor: pointer;
          padding: 0.25rem;
          line-height: 1;
          transition: color 0.2s;
        }
        .chat-close:hover { color: #fff; }
        .chat-body {
          padding: 1.5rem 1.2rem;
        }
        .chat-step-label {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          color: #111;
          margin: 0 0 1rem;
        }
        .chat-input {
          width: 100%;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.9rem;
          padding: 0.7rem 0.9rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          outline: none;
          background: #fafafa;
          color: #222;
          box-sizing: border-box;
          transition: border-color 0.2s;
        }
        .chat-input:focus { border-color: #111; background: #fff; }
        textarea.chat-input { resize: none; height: 90px; }
        .chat-next-btn {
          width: 100%;
          margin-top: 1rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          background: #111;
          color: #fff;
          border: none;
          padding: 0.75rem;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .chat-next-btn:hover { background: #333; }
        .chat-next-btn:disabled { opacity: 0.5; cursor: not-allowed; }
        .chat-progress {
          display: flex;
          gap: 0.4rem;
          margin-bottom: 1.2rem;
        }
        .progress-dot {
          height: 3px;
          flex: 1;
          border-radius: 2px;
          background: #e0e0e0;
          transition: background 0.3s;
        }
        .progress-dot.active { background: #111; }
        .chat-success {
          text-align: center;
          padding: 0.5rem 0;
        }
        .chat-success h3 {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1.2rem;
          color: #111;
          margin: 0.5rem 0 0.5rem;
        }
        .chat-success p {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.88rem;
          color: #555;
          margin: 0;
          line-height: 1.6;
        }
        .success-emoji { font-size: 2.5rem; display: block; margin-bottom: 0.5rem; }
        @media (max-width: 400px) {
          .chat-card { width: calc(100vw - 2rem); right: 1rem; }
        }
      `}</style>

      {/* Floating button */}
      <button className="chat-btn" onClick={() => setIsOpen(o => !o)} aria-label="Chat">
        {isOpen ? '✕' : '💬'}
      </button>

      {/* Widget card */}
      <div className={`chat-card${isOpen ? ' open' : ''}`}>
        <div className="chat-header">
          <div className="chat-avatar">
            NL
            <span className="online-dot" />
          </div>
          <div className="chat-meta">
            <h4>Noah Lie</h4>
            <p>Grunnlegger, Sideklar</p>
          </div>
          <button className="chat-close" onClick={handleClose}>✕</button>
        </div>

        <div className="chat-body">
          {step < 4 && (
            <div className="chat-progress">
              {[1, 2, 3].map(s => (
                <div key={s} className={`progress-dot${step >= s ? ' active' : ''}`} />
              ))}
            </div>
          )}

          {step === 1 && (
            <>
              <p className="chat-step-label">Hva heter du?</p>
              <input
                className="chat-input"
                type="text"
                placeholder="Ditt navn"
                value={name}
                onChange={e => setName(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && name.trim() && setStep(2)}
                autoFocus
              />
              <button
                className="chat-next-btn"
                disabled={!name.trim()}
                onClick={() => setStep(2)}
              >
                Neste →
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <p className="chat-step-label">Hvilken bedrift er dette for?</p>
              <input
                className="chat-input"
                type="text"
                placeholder="Bedriftsnavn"
                value={company}
                onChange={e => setCompany(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && company.trim() && setStep(3)}
                autoFocus
              />
              <button
                className="chat-next-btn"
                disabled={!company.trim()}
                onClick={() => setStep(3)}
              >
                Neste →
              </button>
            </>
          )}

          {step === 3 && (
            <>
              <p className="chat-step-label">Hva kan vi hjelpe deg med?</p>
              <textarea
                className="chat-input"
                placeholder="Beskriv hva du trenger hjelp med..."
                value={message}
                onChange={e => setMessage(e.target.value)}
                autoFocus
              />
              <button
                className="chat-next-btn"
                disabled={!message.trim() || submitting}
                onClick={handleSubmit}
              >
                {submitting ? 'Sender...' : 'Send melding ✓'}
              </button>
            </>
          )}

          {step === 4 && (
            <div className="chat-success">
              <span className="success-emoji">🎉</span>
              <h3>Takk!</h3>
              <p>Vi kontakter deg snart, {name}. Du hører fra oss innen 24 timer.</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
