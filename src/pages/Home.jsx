import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import WhatWeDo from '../components/WhatWeDo.jsx'
import ProgramsOverview from '../components/ProgramsOverview.jsx'
import TestimonialsSlider from '../components/TestimonialsSlider.jsx'
import EventsPreview from '../components/EventsPreview.jsx'
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
      <WhatWeDo />
      <ProgramsOverview />
      <TestimonialsSlider />
      <EventsPreview />
      
      <section className="cta-banner">
        <div className="container">
          <h2>Ready to Transform Your Life?</h2>
          <p>Join thousands of members who are achieving their fitness goals with personalized mentorship</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-red">Get Free Consultation</Link>
            <Link to="/programs" className="btn btn-outline">View Programs</Link>
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


