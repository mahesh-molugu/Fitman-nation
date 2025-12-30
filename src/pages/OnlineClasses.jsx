import { useState } from 'react'
import './OnlineClasses.css'

export default function OnlineClasses() {
  const [selectedClass, setSelectedClass] = useState(null)

  const classes = [
    {
      id: 'yoga',
      name: 'Yoga',
      description: 'Improve flexibility, strength, and mental clarity with our yoga classes. Suitable for all levels.',
      schedule: [
        { day: 'Monday', time: '7:00 AM - 8:00 AM' },
        { day: 'Wednesday', time: '7:00 AM - 8:00 AM' },
        { day: 'Friday', time: '7:00 AM - 8:00 AM' },
        { day: 'Sunday', time: '9:00 AM - 10:00 AM' }
      ],
      instructor: 'Priya Sharma',
      price: '₹499/class or ₹1,999/month unlimited',
      benefits: [
        'Improved flexibility and mobility',
        'Reduced stress and anxiety',
        'Better posture and alignment',
        'Enhanced mind-body connection'
      ]
    },
    {
      id: 'zumba',
      name: 'Zumba',
      description: 'High-energy dance fitness classes that make working out fun. Burn calories while having a blast!',
      schedule: [
        { day: 'Tuesday', time: '6:00 PM - 7:00 PM' },
        { day: 'Thursday', time: '6:00 PM - 7:00 PM' },
        { day: 'Saturday', time: '5:00 PM - 6:00 PM' }
      ],
      instructor: 'Rahul Mehta',
      price: '₹499/class or ₹1,999/month unlimited',
      benefits: [
        'Cardiovascular fitness',
        'Full-body workout',
        'Mood enhancement',
        'Social connection'
      ]
    },
    {
      id: 'mobility',
      name: 'Mobility',
      description: 'Improve your range of motion, reduce stiffness, and prevent injuries with mobility-focused training.',
      schedule: [
        { day: 'Monday', time: '6:00 PM - 7:00 PM' },
        { day: 'Wednesday', time: '6:00 PM - 7:00 PM' },
        { day: 'Friday', time: '6:00 PM - 7:00 PM' }
      ],
      instructor: 'Dr. Anjali Patel',
      price: '₹499/class or ₹1,999/month unlimited',
      benefits: [
        'Increased range of motion',
        'Injury prevention',
        'Better movement quality',
        'Reduced pain and stiffness'
      ]
    },
    {
      id: 'strength',
      name: 'Strength Training',
      description: 'Build muscle, increase strength, and boost metabolism with our structured strength training classes.',
      schedule: [
        { day: 'Tuesday', time: '7:00 AM - 8:00 AM' },
        { day: 'Thursday', time: '7:00 AM - 8:00 AM' },
        { day: 'Saturday', time: '8:00 AM - 9:00 AM' }
      ],
      instructor: 'Vikram Singh',
      price: '₹499/class or ₹1,999/month unlimited',
      benefits: [
        'Increased muscle mass',
        'Improved bone density',
        'Enhanced metabolism',
        'Better functional strength'
      ]
    }
  ]

  const handleBook = (classItem) => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        event_category: 'Class Booking',
        event_label: classItem.name
      })
    }
    window.location.href = `/contact?class=${encodeURIComponent(classItem.id)}`
  }

  return (
    <div className="online-classes-page">
      <section className="classes-hero section">
        <div className="container">
          <h1 className="page-title">Online Classes</h1>
          <p className="page-subtitle">
            Join live online classes from the comfort of your home. All classes are recorded for replay.
          </p>
        </div>
      </section>

      <section className="classes-list section">
        <div className="container">
          <div className="classes-grid">
            {classes.map((classItem) => (
              <div key={classItem.id} className="class-card">
                <h2>{classItem.name}</h2>
                <p className="class-description">{classItem.description}</p>
                
                <div className="class-instructor">
                  <strong>Instructor:</strong> {classItem.instructor}
                </div>

                <div className="class-schedule">
                  <h3>Schedule</h3>
                  <ul>
                    {classItem.schedule.map((slot, idx) => (
                      <li key={idx}>
                        <span className="schedule-day">{slot.day}</span>
                        <span className="schedule-time">{slot.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="class-benefits">
                  <h3>Benefits</h3>
                  <ul>
                    {classItem.benefits.map((benefit, idx) => (
                      <li key={idx}>✓ {benefit}</li>
                    ))}
                  </ul>
                </div>

                <div className="class-price">{classItem.price}</div>

                <button
                  className="btn btn-red class-book"
                  onClick={() => handleBook(classItem)}
                >
                  Book Class
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="classes-info section">
        <div className="container">
          <h2>How Online Classes Work</h2>
          <div className="info-steps">
            <div className="info-step">
              <div className="step-number">1</div>
              <h3>Book Your Class</h3>
              <p>Choose a class and time that works for you. Book individual classes or get unlimited access with a monthly pass.</p>
            </div>
            <div className="info-step">
              <div className="step-number">2</div>
              <h3>Join Live Session</h3>
              <p>Receive a link to join the live class. All you need is a device with internet connection and some space to move.</p>
            </div>
            <div className="info-step">
              <div className="step-number">3</div>
              <h3>Replay Anytime</h3>
              <p>Can't make it live? No problem! All classes are recorded and available for replay at your convenience.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}









