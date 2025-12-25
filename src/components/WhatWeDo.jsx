import { Link } from 'react-router-dom'
import './WhatWeDo.css'
import fitnessIcon from '../assets/fitness.svg'
import nutritionIcon from '../assets/nutrition.svg'
import communityIcon from '../assets/community.svg'

export default function WhatWeDo() {
  const services = [
    {
      icon: fitnessIcon,
      title: 'Fitness',
      description: 'Customized workout plans tailored to your goals, fitness level, and schedule. From beginner foundations to advanced training.',
      link: '/programs'
    },
    {
      icon: nutritionIcon,
      title: 'Diet & Nutrition',
      description: 'Expert nutrition guidance to fuel your body right. Meal plans, recipes, and dietary strategies for optimal results.',
      link: '/programs'
    },
    {
      icon: communityIcon,
      title: 'Community',
      description: 'Join events, challenges, and meetups. Connect with like-minded individuals on the same fitness journey.',
      link: '/events'
    }
  ]

  return (
    <section className="what-we-do section">
      <div className="container">
        <h2 className="section-title">What We Do</h2>
        <p className="section-subtitle">
          We provide comprehensive fitness solutions that combine personalized training, 
          expert mentorship, and a supportive community to help you achieve lasting results.
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


