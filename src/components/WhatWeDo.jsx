import { Link } from 'react-router-dom'
import './WhatWeDo.css'
import fitnessIcon from '../assets/fitness.svg'
import nutritionIcon from '../assets/nutrition.svg'
import communityIcon from '../assets/community.svg'

export default function WhatWeDo() {
  const services = [
    {
      icon: fitnessIcon,
      title: 'Fitness & Training Programs',
      description: 'Structured, science-based workouts designed to help you achieve your fitness goals with consistency and discipline.',
      link: '/programs'
    },
    {
      icon: nutritionIcon,
      title: 'Diet & Nutrition Guidance',
      description: 'Personalized diet strategies and practical nutrition guidance that fits your lifestyle and supports your transformation.',
      link: '/programs'
    },
    {
      icon: communityIcon,
      title: 'Community & Accountability',
      description: 'A powerful support system with real human accountability to keep you motivated, consistent, and results-driven.',
      link: '/events'
    }
  ]

  return (
    <section className="what-we-do section">
      <div className="container">
        <h2 className="section-title">What We Do at FitMan Nation</h2>
        <p className="section-subtitle">
          FitMan Nation helps individuals transform their bodies and lifestyles through structured fitness training, 
          personalized diet strategies, and a powerful fitness community. We combine science-based workouts, 
          practical nutrition guidance, and real human accountability to help people stay consistent, motivated, 
          and results-driven.
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <img src={service.icon} alt={service.title} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to={service.link} className="service-link">
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



