import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './TestimonialsSlider.css'

export default function TestimonialsSlider() {
  const testimonials = [
    {
      name: 'Ravi Kumar',
      role: 'Software Engineer',
      text: 'FitMan Nation transformed my life. The flexible scheduling fits perfectly with my busy work schedule, and the mentor support kept me motivated throughout.',
      rating: 5
    },
    {
      name: 'Meera Sharma',
      role: 'Marketing Professional',
      text: 'I lost 15kg in 6 months with the Pro Transformation plan. The community events and challenges made the journey fun and engaging.',
      rating: 5
    },
    {
      name: 'Asha Patel',
      role: 'Homemaker',
      text: 'As a beginner, I was nervous about starting. But the Basic Plan with mentor guidance gave me confidence and I\'ve never felt better!',
      rating: 5
    },
    {
      name: 'Rajesh Singh',
      role: 'Business Owner',
      text: 'The Premium 1-on-1 coaching is worth every rupee. My mentor understood my goals and created a plan that worked around my schedule.',
      rating: 5
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <section className="testimonials-slider section">
      <div className="container">
        <h2 className="section-title">Success Stories</h2>
        <p className="section-subtitle">
          Real results from real people. See how our members are achieving their fitness goals.
        </p>
        <div className="testimonials-container">
          <div className="testimonial-card active">
            <div className="stars">
              {'★'.repeat(testimonials[currentIndex].rating)}
            </div>
            <blockquote className="testimonial-text">
              "{testimonials[currentIndex].text}"
            </blockquote>
            <div className="testimonial-author">
              <strong>{testimonials[currentIndex].name}</strong>
              <span>{testimonials[currentIndex].role}</span>
            </div>
          </div>
          <div className="testimonials-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="testimonials-cta">
          <Link to="/success-stories" className="btn btn-outline">
            View All Stories
          </Link>
        </div>
      </div>
    </section>
  )
}









