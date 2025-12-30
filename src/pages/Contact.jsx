import { useState, useEffect } from 'react'
import api from '../services/api'
import { getSessionId } from '../utils/auth'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    fitnessGoal: '',
    experienceLevel: '',
    medicalConditions: '',
    hasMedicalConditions: 'no',
    workoutLocation: '',
    availableTime: '',
    message: '',
    consent: false
  })

  const [showFAQ, setShowFAQ] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const email = params.get('email')
    const program = params.get('program')
    const event = params.get('event')
    const classId = params.get('class')
    
    if (email) setFormData(prev => ({ ...prev, email }))
    if (program) setFormData(prev => ({ ...prev, message: `I'm interested in the ${program} program.` }))
    if (event) setFormData(prev => ({ ...prev, message: `I'd like to register for the ${event} event.` }))
    if (classId) setFormData(prev => ({ ...prev, message: `I'd like to book the ${classId} class.` }))
  }, [])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      // Track conversion in backend
      await api.trackEvent('Contact Form', 'submit', 'Form Submission', null, getSessionId())
      
      // Track in Google Analytics
      if (window.gtag) {
        window.gtag('event', 'conversion', {
          event_category: 'Contact Form',
          event_label: 'Form Submission'
        })
      }

      // Try to register user (or login if exists)
      try {
        const authData = await api.register({
          name: formData.name,
          email: formData.email,
          password: formData.phone || 'temp123', // Use phone as temp password
          phone: formData.phone,
          fitnessGoal: formData.fitnessGoal,
          experienceLevel: formData.experienceLevel,
          workoutLocation: formData.workoutLocation,
          availableTime: formData.availableTime,
          medicalConditions: formData.hasMedicalConditions === 'yes' ? formData.medicalConditions : null,
          role: 'USER'
        })
        
        // Store auth data
        localStorage.setItem('token', authData.token)
        localStorage.setItem('user', JSON.stringify({
          id: authData.userId,
          email: authData.email,
          name: authData.name,
          role: authData.role
        }))
      } catch (regError) {
        // User might already exist, try login
        if (regError.message.includes('exists')) {
          try {
            const authData = await api.login(formData.email, formData.phone || 'temp123')
            localStorage.setItem('token', authData.token)
            localStorage.setItem('user', JSON.stringify({
              id: authData.userId,
              email: authData.email,
              name: authData.name,
              role: authData.role
            }))
          } catch (loginError) {
            console.log('Login also failed, continuing with WhatsApp')
          }
        }
      }

      // Prepare WhatsApp message
      const whatsappMessage = `Hello FitMan Nation!%0A%0A` +
        `Name: ${formData.name}%0A` +
        `Email: ${formData.email}%0A` +
        `Phone: ${formData.phone}%0A` +
        `Fitness Goal: ${formData.fitnessGoal}%0A` +
        `Experience Level: ${formData.experienceLevel}%0A` +
        `Medical Conditions: ${formData.hasMedicalConditions === 'yes' ? formData.medicalConditions : 'None'}%0A` +
        `Workout Location: ${formData.workoutLocation}%0A` +
        `Available Time: ${formData.availableTime}%0A` +
        `Message: ${formData.message}`

      // Open WhatsApp
      window.open(`https://wa.me/919876543210?text=${whatsappMessage}`, '_blank')

      alert('Thank you! We\'ll contact you soon. Opening WhatsApp...')
    } catch (error) {
      console.error('Form submission error:', error)
      alert('Thank you! We\'ll contact you soon.')
    }
  }

  const faqs = [
    {
      question: 'How do I get started?',
      answer: 'Simply fill out the contact form or reach out via WhatsApp. We\'ll schedule a free consultation to discuss your goals and find the right program for you.'
    },
    {
      question: 'What programs do you offer?',
      answer: 'We offer Basic Plan, Pro Transformation, Premium 1-on-1 Coaching, Special Case Coaching, Group Fitness Classes, and Family & Corporate Plans.'
    },
    {
      question: 'Do you offer online classes?',
      answer: 'Yes! We offer live online classes in Yoga, Zumba, Mobility, and Strength Training. All classes are recorded for replay.'
    },
    {
      question: 'Can I work out at home?',
      answer: 'Absolutely! All our programs can be adapted for home workouts. We provide equipment-free and minimal equipment options.'
    },
    {
      question: 'What if I have medical conditions?',
      answer: 'We offer Special Case Coaching specifically designed for individuals with medical conditions. We coordinate with healthcare providers to ensure safe programming.'
    },
    {
      question: 'How much does it cost?',
      answer: 'Our plans start at ₹999/month for the Basic Plan. Premium plans and special programs have custom pricing. Contact us for details.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we have a refund policy. Please see our Refund Policy page for details.'
    },
    {
      question: 'How do I track my progress?',
      answer: 'Members get access to our platform where you can track workouts, nutrition, measurements, and communicate with your mentor.'
    }
  ]

  return (
    <div className="contact-page">
      <section className="contact-hero section">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">
            Get in touch with us. We're here to help you start your fitness journey.
          </p>
        </div>
      </section>

      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-section">
              <h2>Get Started Today</h2>
              <p>Fill out the form below and we'll get back to you within 24 hours.</p>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="fitnessGoal">Fitness Goal *</label>
                  <select
                    id="fitnessGoal"
                    name="fitnessGoal"
                    value={formData.fitnessGoal}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select your goal</option>
                    <option value="weight-loss">Weight Loss</option>
                    <option value="muscle-gain">Muscle Gain</option>
                    <option value="strength">Strength Building</option>
                    <option value="endurance">Endurance</option>
                    <option value="mobility">Mobility & Flexibility</option>
                    <option value="general-fitness">General Fitness</option>
                    <option value="rehabilitation">Rehabilitation</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="experienceLevel">Experience Level *</label>
                  <select
                    id="experienceLevel"
                    name="experienceLevel"
                    value={formData.experienceLevel}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select your level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="hasMedicalConditions">Do you have any medical conditions?</label>
                  <select
                    id="hasMedicalConditions"
                    name="hasMedicalConditions"
                    value={formData.hasMedicalConditions}
                    onChange={handleChange}
                  >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </div>

                {formData.hasMedicalConditions === 'yes' && (
                  <div className="form-group">
                    <label htmlFor="medicalConditions">Please describe your medical conditions</label>
                    <textarea
                      id="medicalConditions"
                      name="medicalConditions"
                      value={formData.medicalConditions}
                      onChange={handleChange}
                      rows="3"
                    />
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="workoutLocation">Preferred Workout Location</label>
                  <select
                    id="workoutLocation"
                    name="workoutLocation"
                    value={formData.workoutLocation}
                    onChange={handleChange}
                  >
                    <option value="">Select location</option>
                    <option value="home">Home</option>
                    <option value="gym">Gym</option>
                    <option value="both">Both</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="availableTime">Available Time Per Day</label>
                  <select
                    id="availableTime"
                    name="availableTime"
                    value={formData.availableTime}
                    onChange={handleChange}
                  >
                    <option value="">Select time</option>
                    <option value="15-30">15-30 minutes</option>
                    <option value="30-45">30-45 minutes</option>
                    <option value="45-60">45-60 minutes</option>
                    <option value="60+">60+ minutes</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Tell us about your goals, questions, or any specific requirements..."
                  />
                </div>

                <div className="form-group checkbox-group">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="consent">
                    I agree to the <a href="/terms-of-service" target="_blank">Terms of Service</a> and{' '}
                    <a href="/privacy-policy" target="_blank">Privacy Policy</a> *
                  </label>
                </div>

                <button type="submit" className="btn btn-red form-submit">
                  Submit & Contact via WhatsApp
                </button>
              </form>
            </div>

            <div className="contact-info-section">
              <div className="info-card">
                <h3>Contact Information</h3>
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <div>
                    <strong>Email</strong>
                    <a href="mailto:support@fitmannation.com">support@fitmannation.com</a>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">💬</span>
                  <div>
                    <strong>WhatsApp</strong>
                    <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                      +91 98765 43210
                    </a>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <div>
                    <strong>Phone</strong>
                    <a href="tel:+919876543210">+91 98765 43210</a>
                  </div>
                </div>
              </div>

              <div className="info-card">
                <h3>Quick Links</h3>
                <ul className="quick-links">
                  <li><a href="/programs">View Programs</a></li>
                  <li><a href="/events">Upcoming Events</a></li>
                  <li><a href="/online-classes">Online Classes</a></li>
                  <li><a href="/how-it-works">How It Works</a></li>
                </ul>
              </div>

              <div className="info-card">
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    📷 Instagram
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    ▶️ YouTube
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    👥 Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => setShowFAQ(showFAQ === index ? null : index)}
                >
                  {faq.question}
                  <span className="faq-toggle">{showFAQ === index ? '−' : '+'}</span>
                </button>
                {showFAQ === index && (
                  <div className="faq-answer">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}







