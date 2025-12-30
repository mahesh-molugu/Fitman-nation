import { Link } from 'react-router-dom'
import './ProgramsOverview.css'

export default function ProgramsOverview() {
  const programs = [
    {
      name: 'Basic Plan',
      description: 'Perfect for beginners starting their fitness journey',
      features: ['Custom workout plan', 'Nutrition basics', 'Community access'],
      price: '₹999/month'
    },
    {
      name: 'Pro Transformation',
      description: 'Comprehensive program for serious results',
      features: ['Advanced training', 'Meal plans', 'Progress tracking', 'Mentor support'],
      price: '₹2,999/month'
    },
    {
      name: 'Premium 1-on-1',
      description: 'Personalized coaching with dedicated mentor',
      features: ['1-on-1 sessions', 'Custom diet plan', 'Daily check-ins', 'Priority support'],
      price: '₹4,999/month'
    }
  ]

  return (
    <section className="programs-overview section">
      <div className="container">
        <h2 className="section-title">Our Programs</h2>
        <p className="section-subtitle">
          Choose the plan that fits your goals, schedule, and budget. 
          All plans include access to our community and events.
        </p>
        <div className="programs-grid">
          {programs.map((program, index) => (
            <div key={index} className="program-card">
              <h3>{program.name}</h3>
              <p className="program-description">{program.description}</p>
              <ul className="program-features">
                {program.features.map((feature, idx) => (
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>
              <div className="program-price">{program.price}</div>
              <Link to="/programs" className="btn btn-outline program-cta">
                Enroll Now
              </Link>
            </div>
          ))}
        </div>
        <div className="programs-cta">
          <Link to="/programs" className="btn btn-red">
            View All Programs
          </Link>
        </div>
      </div>
    </section>
  )
}









