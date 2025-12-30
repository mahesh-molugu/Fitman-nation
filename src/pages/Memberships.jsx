import { Link } from 'react-router-dom'
import './Memberships.css'

export default function Memberships() {
  const membershipPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: '₹999/month',
      image: '/images/memberships/basic-plan.jpg',
      features: ['Custom workout plans', 'Nutrition basics', 'Community access']
    },
    {
      id: 'pro',
      name: 'Pro Transformation',
      price: '₹2,999/month',
      image: '/images/memberships/pro-plan.jpg',
      features: ['Advanced training', 'Meal plans', 'Progress tracking', 'Mentor support']
    },
    {
      id: 'premium',
      name: 'Premium 1-on-1',
      price: '₹4,999/month',
      image: '/images/memberships/premium-plan.jpg',
      features: ['1-on-1 sessions', 'Custom diet plan', 'Daily check-ins', 'Priority support']
    }
  ]

  return (
    <div className="memberships-page">
      <section className="memberships-hero section">
        <div className="container">
          <h1 className="page-title">Membership Plans</h1>
          <p className="page-subtitle">
            Choose the perfect plan for your fitness journey
          </p>
        </div>
      </section>

      <section className="memberships-grid section">
        <div className="container">
          <div className="membership-cards">
            {membershipPlans.map((plan) => (
              <div key={plan.id} className="membership-card">
                <div className="membership-image-wrapper">
                  <img 
                    src={plan.image} 
                    alt={plan.name}
                    className="membership-image"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                  <div className="membership-overlay">
                    <div className="membership-price">{plan.price}</div>
                  </div>
                </div>
                <div className="membership-content">
                  <h3>{plan.name}</h3>
                  <ul className="membership-features">
                    {plan.features.map((feature, idx) => (
                      <li key={idx}>✓ {feature}</li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn btn-red membership-cta">
                    Enroll Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
