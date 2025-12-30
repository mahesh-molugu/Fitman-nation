import { useState } from 'react'
import api from '../services/api'
import { isAuthenticated, getCurrentUser, getSessionId } from '../utils/auth'
import './Programs.css'

export default function Programs() {
  const [selectedProgram, setSelectedProgram] = useState(null)

  const programs = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: '₹999/month',
      description: 'Perfect for beginners starting their fitness journey. Get access to foundational workouts and nutrition guidance.',
      features: [
        'Custom workout plan tailored to your goals',
        'Basic nutrition guidance and meal suggestions',
        'Access to community events and challenges',
        'Weekly progress check-ins',
        'Mobile app access',
        'Email support'
      ],
      benefits: [
        'Start your fitness journey with expert guidance',
        'Learn proper form and technique',
        'Build healthy habits gradually',
        'Join a supportive community'
      ],
      outcomes: [
        'Improved fitness foundation',
        'Better understanding of nutrition',
        'Increased energy levels',
        'Confidence in your fitness journey'
      ],
      cta: '👉 Enroll Now'
    },
    {
      id: 'pro',
      name: 'Pro Transformation',
      price: '₹2,999/month',
      description: 'Comprehensive program for serious results. Advanced training, detailed meal plans, and dedicated mentor support.',
      features: [
        'Advanced personalized workout plans',
        'Detailed meal plans with recipes',
        'Progress tracking and analytics',
        'Bi-weekly mentor consultations',
        'Priority event registration',
        'WhatsApp support with mentors',
        'Access to all online classes',
        'Monthly body composition analysis'
      ],
      benefits: [
        'Accelerated results with structured plans',
        'Expert guidance every step of the way',
        'Comprehensive nutrition support',
        'Access to premium resources'
      ],
      outcomes: [
        'Significant body transformation',
        'Improved strength and endurance',
        'Better nutrition habits',
        'Achievement of specific fitness goals'
      ],
      cta: '👉 Enroll Now'
    },
    {
      id: 'premium',
      name: 'Premium 1-on-1 Coaching',
      price: '₹4,999/month',
      description: 'Elite personalized coaching with a dedicated mentor. Maximum attention, custom plans, and daily accountability.',
      features: [
        'Dedicated personal mentor',
        '1-on-1 video coaching sessions (weekly)',
        'Fully customized workout and diet plans',
        'Daily check-ins and accountability',
        '24/7 priority support',
        'Real-time form corrections',
        'Goal-specific programming',
        'Quarterly strategy reviews',
        'Access to all premium features'
      ],
      benefits: [
        'Maximum personalization and attention',
        'Fastest path to your goals',
        'Expert guidance tailored to you',
        'Unlimited support and adjustments'
      ],
      outcomes: [
        'Optimal results in shortest time',
        'Master-level technique and form',
        'Complete lifestyle transformation',
        'Long-term sustainable habits'
      ],
      cta: '👉 Enroll Now'
    },
    {
      id: 'special',
      name: 'Special Case Coaching',
      price: 'Custom Pricing',
      description: 'Medical-safe fitness programs for individuals with specific conditions, injuries, or mobility limitations.',
      features: [
        'Medical consultation coordination',
        'Adaptive exercise programming',
        'Injury rehabilitation support',
        'Mobility-focused training',
        'Specialized equipment guidance',
        'Regular health monitoring',
        'Family/caregiver support',
        'Flexible scheduling options'
      ],
      benefits: [
        'Safe fitness for all abilities',
        'Expert knowledge of adaptive training',
        'Coordination with healthcare providers',
        'Inclusive and supportive environment'
      ],
      outcomes: [
        'Improved mobility and function',
        'Safe progression of fitness',
        'Enhanced quality of life',
        'Confidence in physical activity'
      ],
      cta: 'Contact Us'
    },
    {
      id: 'group',
      name: 'Group Fitness Classes',
      price: '₹499/class or ₹1,999/month',
      description: 'Join energizing group classes including Zumba, Yoga, Mobility, and Strength training.',
      features: [
        'Live online classes',
        'Recorded sessions for replay',
        'Multiple class types available',
        'Flexible scheduling',
        'Community atmosphere',
        'Expert instructors',
        'All fitness levels welcome',
        'Monthly unlimited pass available'
      ],
      benefits: [
        'Fun and engaging workouts',
        'Social connection and motivation',
        'Variety in your routine',
        'Affordable fitness option'
      ],
      outcomes: [
        'Improved cardiovascular health',
        'Better flexibility and mobility',
        'Increased strength',
        'Enhanced mood and energy'
      ],
      cta: 'Book Class'
    },
    {
      id: 'family',
      name: 'Family & Corporate Plans',
      price: 'Contact for Pricing',
      description: 'Special packages for families and corporate teams. Build healthy habits together.',
      features: [
        'Multiple member discounts',
        'Family-friendly programming',
        'Corporate wellness programs',
        'Team challenges and events',
        'Bulk pricing options',
        'Dedicated account manager',
        'Customized group plans',
        'Progress tracking for teams'
      ],
      benefits: [
        'Save with group pricing',
        'Build healthy habits together',
        'Team motivation and accountability',
        'Customized for your group'
      ],
      outcomes: [
        'Improved team health',
        'Stronger family bonds through fitness',
        'Enhanced workplace wellness',
        'Sustainable group fitness culture'
      ],
      cta: 'Get Quote'
    }
  ]

  const handleEnroll = async (program) => {
    try {
      const user = getCurrentUser()
      const sessionId = getSessionId()
      
      // Track CTA click
      await api.trackEvent('CTA', 'click', `Enroll ${program.name}`, user?.id?.toString(), sessionId)
      
      // Track in Google Analytics
      if (window.gtag) {
        window.gtag('event', 'conversion', {
          event_category: 'Program Enrollment',
          event_label: program.name
        })
      }

      // Check if user is authenticated
      if (!isAuthenticated()) {
        window.location.href = `/contact?program=${encodeURIComponent(program.id)}`
        return
      }

      // Check if plan has custom pricing
      const planPrice = program.price === 'Custom Pricing' ? 0 : 
                       parseFloat(program.price.replace(/[₹,]/g, '').split('/')[0])
      
      if (planPrice === 0) {
        // Custom pricing - redirect to contact
        window.location.href = `/contact?program=${encodeURIComponent(program.id)}`
        return
      }

      // Create payment order
      const order = await api.createPaymentOrder(program.id.toUpperCase(), program.description)
      
      // Initialize Razorpay
      const options = {
        key: order.keyId,
        amount: Math.round(order.amount * 100), // Convert to paise
        currency: order.currency,
        name: 'FitMan Nation',
        description: order.description,
        order_id: order.orderId,
        handler: async function(response) {
          try {
            // Verify payment
            await api.verifyPayment({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              plan: program.id.toUpperCase()
            })
            
            alert('Payment successful! Your membership is activated.')
            window.location.reload()
          } catch (error) {
            console.error('Payment verification error:', error)
            alert('Payment verification failed. Please contact support.')
          }
        },
        prefill: {
          email: user?.email || '',
          contact: user?.phone || ''
        },
        theme: {
          color: '#DC143C'
        },
        modal: {
          ondismiss: function() {
            console.log('Payment cancelled')
          }
        }
      }
      
      const razorpay = new window.Razorpay(options)
      razorpay.open()
    } catch (error) {
      console.error('Enrollment error:', error)
      // Fallback to contact page
      window.location.href = `/contact?program=${encodeURIComponent(program.id)}`
    }
  }

  return (
    <div className="programs-page">
      <section className="programs-hero section">
        <div className="container">
          <h1 className="page-title">Our Programs</h1>
          <p className="page-subtitle">
            Choose the plan that fits your goals, schedule, and budget. 
            All programs include access to our community and expert mentorship.
          </p>
        </div>
      </section>

      <section className="programs-list section">
        <div className="container">
          {programs.map((program) => (
            <div key={program.id} className="program-detail-card">
              <div className="program-header">
                <div>
                  <h2>{program.name}</h2>
                  <div className="program-price">{program.price}</div>
                </div>
                <button
                  className="btn btn-red"
                  onClick={() => handleEnroll(program)}
                >
                  {program.cta}
                </button>
              </div>
              <p className="program-description">{program.description}</p>
              
              <div className="program-details-grid">
                <div className="detail-section">
                  <h3>Features</h3>
                  <ul>
                    {program.features.map((feature, idx) => (
                      <li key={idx}>✓ {feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="detail-section">
                  <h3>Benefits</h3>
                  <ul>
                    {program.benefits.map((benefit, idx) => (
                      <li key={idx}>✓ {benefit}</li>
                    ))}
                  </ul>
                </div>
                <div className="detail-section">
                  <h3>Key Outcomes</h3>
                  <ul>
                    {program.outcomes.map((outcome, idx) => (
                      <li key={idx}>✓ {outcome}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="programs-cta section">
        <div className="container">
          <h2>Not Sure Which Plan is Right for You?</h2>
          <p>Get a free consultation and we'll help you choose the perfect program.</p>
          <a href="/contact" className="btn btn-red">Get Free Consultation</a>
        </div>
      </section>
    </div>
  )
}



