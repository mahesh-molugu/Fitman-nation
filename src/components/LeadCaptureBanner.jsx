import { useState } from 'react'
import { Link } from 'react-router-dom'
import './LeadCaptureBanner.css'

export default function LeadCaptureBanner({ onClose }) {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      // Track conversion
      if (window.gtag) {
        window.gtag('event', 'conversion', {
          event_category: 'Lead Capture',
          event_label: 'Banner Form'
        })
      }
      // Redirect to contact page with email pre-filled
      window.location.href = `/contact?email=${encodeURIComponent(email)}`
    }
  }

  return (
    <div className="lead-banner">
      <div className="lead-banner-content">
        <p>🎯 <strong>Get Your Free Consultation!</strong> Start your fitness journey today.</p>
        <form onSubmit={handleSubmit} className="lead-banner-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="lead-banner-input"
          />
          <Link to="/contact" className="btn btn-white lead-banner-btn" onClick={() => {
            if (window.gtag) {
              window.gtag('event', 'click', {
                event_category: 'CTA',
                event_label: 'Lead Banner CTA'
              })
            }
          }}>
            Get Started
          </Link>
        </form>
      </div>
      <button className="lead-banner-close" onClick={onClose} aria-label="Close banner">
        ×
      </button>
    </div>
  )
}









