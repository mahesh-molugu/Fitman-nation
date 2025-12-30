import { useState } from 'react'
import './SuccessStories.css'

export default function SuccessStories() {
  const [selectedStory, setSelectedStory] = useState(0)

  const stories = [
    {
      name: 'Ravi Kumar',
      age: 32,
      role: 'Software Engineer',
      program: 'Pro Transformation',
      duration: '6 months',
      results: {
        weight: 'Lost 12kg',
        strength: 'Increased bench press by 40kg',
        energy: 'Energy levels up 80%'
      },
      testimonial: 'FitMan Nation transformed my life. As a software engineer with long hours, I never thought I could maintain a fitness routine. The flexible scheduling and mentor support made all the difference. I lost 12kg, gained incredible strength, and feel more energetic than I have in years.',
      beforeAfter: 'Available on request',
      video: false
    },
    {
      name: 'Meera Sharma',
      age: 28,
      role: 'Marketing Professional',
      program: 'Pro Transformation',
      duration: '6 months',
      results: {
        weight: 'Lost 15kg',
        confidence: 'Confidence through the roof',
        habits: 'Completely transformed lifestyle'
      },
      testimonial: 'I lost 15kg in 6 months with the Pro Transformation plan. The community events and challenges made the journey fun and engaging. My mentor was always there to guide me, and the nutrition plans were game-changers.',
      beforeAfter: 'Available on request',
      video: false
    },
    {
      name: 'Asha Patel',
      age: 35,
      role: 'Homemaker',
      program: 'Basic Plan',
      duration: '4 months',
      results: {
        fitness: 'Went from sedentary to active',
        strength: 'Can now do 20 push-ups',
        energy: 'Energy and mood significantly improved'
      },
      testimonial: 'As a beginner, I was nervous about starting. But the Basic Plan with mentor guidance gave me confidence and I\'ve never felt better! The workouts fit into my busy schedule, and I love the community support.',
      beforeAfter: 'Available on request',
      video: false
    },
    {
      name: 'Rajesh Singh',
      age: 45,
      role: 'Business Owner',
      program: 'Premium 1-on-1 Coaching',
      duration: '8 months',
      results: {
        body: 'Complete body transformation',
        strength: 'Doubled all strength numbers',
        lifestyle: 'Sustainable healthy lifestyle'
      },
      testimonial: 'The Premium 1-on-1 coaching is worth every rupee. My mentor understood my goals and created a plan that worked around my schedule. The daily accountability and personalized approach led to results I never thought possible.',
      beforeAfter: 'Available on request',
      video: false
    },
    {
      name: 'Priya Nair',
      age: 29,
      role: 'Teacher',
      program: 'Special Case Coaching',
      duration: '10 months',
      results: {
        mobility: 'Improved mobility by 60%',
        pain: 'Reduced chronic pain',
        confidence: 'Gained confidence in movement'
      },
      testimonial: 'After a car accident, I thought I\'d never be active again. The Special Case Coaching program helped me regain mobility and confidence. The adaptive exercises and medical coordination made me feel safe and supported throughout.',
      beforeAfter: 'Available on request',
      video: false
    }
  ]

  return (
    <div className="success-stories-page">
      <section className="stories-hero section">
        <div className="container">
          <h1 className="page-title">Success Stories</h1>
          <p className="page-subtitle">
            Real results from real people. See how our members are achieving their fitness goals 
            with personalized mentorship and community support.
          </p>
        </div>
      </section>

      <section className="stories-showcase section">
        <div className="container">
          <div className="stories-grid">
            {stories.map((story, index) => (
              <div key={index} className="story-card">
                <div className="story-header">
                  <div className="story-avatar">
                    {story.name.charAt(0)}
                  </div>
                  <div className="story-info">
                    <h3>{story.name}</h3>
                    <p>{story.role}, {story.age} years</p>
                  </div>
                </div>
                <div className="story-program">
                  <strong>Program:</strong> {story.program} • {story.duration}
                </div>
                <blockquote className="story-testimonial">
                  "{story.testimonial}"
                </blockquote>
                <div className="story-results">
                  <h4>Key Results:</h4>
                  <ul>
                    {Object.entries(story.results).map(([key, value]) => (
                      <li key={key}>
                        <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                      </li>
                    ))}
                  </ul>
                </div>
                {story.beforeAfter && (
                  <div className="story-before-after">
                    <span>📸 Before/After photos available on request</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stories-cta section">
        <div className="container">
          <h2>Ready to Write Your Success Story?</h2>
          <p>Join thousands of members who are transforming their lives with FitMan Nation.</p>
          <a href="/contact" className="btn btn-red">Start Your Journey</a>
        </div>
      </section>
    </div>
  )
}









