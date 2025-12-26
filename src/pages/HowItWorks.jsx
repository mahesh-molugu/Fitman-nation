import { Link } from 'react-router-dom'
import './HowItWorks.css'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Sign Up & Consultation',
      description: 'Create your account and schedule a free consultation call. We\'ll discuss your goals, fitness level, schedule, and any medical considerations.',
      icon: '📝'
    },
    {
      number: '02',
      title: 'Fitness Assessment',
      description: 'Complete a comprehensive fitness assessment. This helps us understand your current strength, flexibility, endurance, and mobility levels.',
      icon: '📊'
    },
    {
      number: '03',
      title: 'Customized Workout Plan',
      description: 'Your mentor creates a personalized workout plan tailored to your goals, schedule, available equipment, and fitness level.',
      icon: '💪'
    },
    {
      number: '04',
      title: 'Nutrition Guidance',
      description: 'Receive expert nutrition guidance including meal plans, recipes, and dietary strategies that align with your fitness goals.',
      icon: '🥗'
    },
    {
      number: '05',
      title: 'Daily Accountability',
      description: 'Stay on track with daily check-ins, progress photos, and regular communication with your mentor through our platform.',
      icon: '✅'
    },
    {
      number: '06',
      title: 'Progress Tracking',
      description: 'Monitor your journey with detailed analytics, body measurements, strength progress, and milestone celebrations.',
      icon: '📈'
    },
    {
      number: '07',
      title: 'Community Events & Challenges',
      description: 'Join runs, challenges, workshops, and meetups. Connect with the community and stay motivated together.',
      icon: '🎉'
    }
  ]

  return (
    <div className="how-it-works-page">
      <section className="how-hero section">
        <div className="container">
          <h1 className="page-title">How FitMan Nation Works</h1>
          <p className="page-subtitle">
            Your fitness journey with FitMan Nation is simple, structured, and supported every step of the way.
          </p>
        </div>
      </section>

      <section className="steps-section section">
        <div className="container">
          <div className="steps-timeline">
            {steps.map((step, index) => (
              <div key={index} className="step-card">
                <div className="step-number">{step.number}</div>
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                {index < steps.length - 1 && <div className="step-connector"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process-cta section">
        <div className="container">
          <h2>Ready to Start Your Journey?</h2>
          <p>Join thousands of members who are transforming their lives with personalized mentorship.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-red">Get Started Today</Link>
            <Link to="/programs" className="btn btn-outline">View Programs</Link>
          </div>
        </div>
      </section>
    </div>
  )
}



