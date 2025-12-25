import { Link } from 'react-router-dom'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-bg-overlay"></div>
      </div>

      <div className="hero-inner">
        <div className="hero-content">
          <h1 className="hero-title">
            Train Smarter.<br />
            <span className="highlight">With Mentors.</span>
          </h1>
          <p className="hero-sub">
            Personalized fitness plans, expert mentorship, and a supportive community. 
            Built for every body, every schedule, and every goal.
          </p>
          <div className="hero-ctas">
            <Link to="/contact" className="btn btn-red" onClick={() => {
              if (window.gtag) {
                window.gtag('event', 'click', {
                  event_category: 'CTA',
                  event_label: 'Hero Get Started'
                })
              }
            }}>
              Get Started
            </Link>
            <Link to="/programs" className="btn btn-outline" onClick={() => {
              if (window.gtag) {
                window.gtag('event', 'click', {
                  event_category: 'CTA',
                  event_label: 'Hero Join Now'
                })
              }
            }}>
              Join Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
