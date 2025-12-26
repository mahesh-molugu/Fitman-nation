import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import HeroVideo from '../components/HeroVideo.jsx'
import WhatWeDo from '../components/WhatWeDo.jsx'
import ProgramsOverview from '../components/ProgramsOverview.jsx'
import TestimonialsSlider from '../components/TestimonialsSlider.jsx'
import EventsPreview from '../components/EventsPreview.jsx'
import WhatsAppCommunity from '../components/WhatsAppCommunity.jsx'
import LeadCaptureBanner from '../components/LeadCaptureBanner.jsx'
import './Home.css'

export default function Home() {
  const [showLeadBanner, setShowLeadBanner] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      const dismissed = localStorage.getItem('leadBannerDismissed')
      if (!dismissed) {
        setShowLeadBanner(true)
      }
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="home-page">
      <Hero />
      <HeroVideo />
      <WhatWeDo />
      <ProgramsOverview />
      <TestimonialsSlider />
      <EventsPreview />
      <WhatsAppCommunity />
      
      <section className="cta-banner">
        <div className="container">
          <h2>Get a Free Consultation</h2>
          <p>Not sure where to start? Speak with our coaches and get a personalized fitness direction based on your goals, body type, and lifestyle.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-red">👉 Get Free Consultation</Link>
          </div>
        </div>
      </section>

      {showLeadBanner && (
        <LeadCaptureBanner onClose={() => {
          setShowLeadBanner(false)
          localStorage.setItem('leadBannerDismissed', 'true')
        }} />
      )}
    </div>
  )
}



