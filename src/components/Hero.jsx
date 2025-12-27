import { Link } from 'react-router-dom'
import './Hero.css'
import heroMp4 from '../assets/hero.mp4'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <video 
          className="hero-bg-video"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          poster="/images/hero-video-poster.jpg"
        >
          <source src={heroMp4} type="video/mp4" />
          {/* Fallback to image if video doesn't load */}
        </video>
        <img 
          src="/images/hero-background.jpg" 
          alt="" 
          className="hero-bg-image"
          onError={(e) => {
            e.target.style.display = 'none'
          }}
        />
        <div className="hero-bg-overlay"></div>
      </div>

      <div className="hero-inner">
        <div className="hero-content">
          <h1 className="hero-title">
            Train Smarter.<br />
            <span className="highlight">With Mentors.</span>
          </h1>
          <p className="hero-sub">
            FitMan Nation is a fitness-first community built to transform lives through structured training, 
            smart nutrition, accountability, and a strong support ecosystem. We focus not just on physical 
            transformation, but on building long-term discipline, confidence, and a sustainable healthy lifestyle.
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
