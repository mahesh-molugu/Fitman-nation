import { useState } from 'react'
import './Events.css'

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null)

  const events = [
    {
      id: 'run-5k',
      title: 'Community 5K Run',
      date: 'March 15, 2024',
      time: '6:00 AM',
      location: 'Central Park',
      type: 'Running Event',
      description: 'Join us for a fun community 5K run. All fitness levels welcome!',
      registrationOpen: true,
      maxParticipants: 100,
      currentParticipants: 45
    },
    {
      id: 'pushups',
      title: 'Push-ups Challenge',
      date: 'March 20, 2024',
      time: '7:00 PM',
      location: 'Online',
      type: 'Challenge',
      description: 'Test your strength in our monthly push-ups challenge. Compete for prizes!',
      registrationOpen: true,
      maxParticipants: 200,
      currentParticipants: 120
    },
    {
      id: 'plank',
      title: 'Plank Challenge',
      date: 'March 22, 2024',
      time: '7:00 PM',
      location: 'Online',
      type: 'Challenge',
      description: 'How long can you hold? Join our plank challenge and push your limits.',
      registrationOpen: true,
      maxParticipants: 150,
      currentParticipants: 89
    },
    {
      id: 'yoga',
      title: 'Yoga & Mindfulness Workshop',
      date: 'March 25, 2024',
      time: '9:00 AM',
      location: 'Community Center',
      type: 'Workshop',
      description: 'Relax and rejuvenate with our yoga and mindfulness session.',
      registrationOpen: true,
      maxParticipants: 50,
      currentParticipants: 32
    },
    {
      id: 'zumba',
      title: 'Zumba Dance Party',
      date: 'March 28, 2024',
      time: '6:00 PM',
      location: 'Fitness Studio',
      type: 'Class',
      description: 'Get moving with our high-energy Zumba dance party!',
      registrationOpen: true,
      maxParticipants: 60,
      currentParticipants: 28
    }
  ]

  const handleRegister = (event) => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        event_category: 'Event Registration',
        event_label: event.title
      })
    }
    window.location.href = `/contact?event=${encodeURIComponent(event.id)}`
  }

  return (
    <div className="events-page">
      <section className="events-hero section">
        <div className="container">
          <h1 className="page-title">Upcoming Events</h1>
          <p className="page-subtitle">
            Join our community events, challenges, and meetups. Connect, compete, and celebrate together.
          </p>
        </div>
      </section>

      <section className="events-calendar section">
        <div className="container">
          <div className="events-grid">
            {events.map((event) => (
              <div key={event.id} className="event-card">
                <div className="event-header">
                  <span className="event-type">{event.type}</span>
                  {event.registrationOpen && (
                    <span className="event-status open">Open</span>
                  )}
                </div>
                <h3>{event.title}</h3>
                <div className="event-details">
                  <div className="event-detail">
                    <span className="detail-icon">📅</span>
                    <span>{event.date}</span>
                  </div>
                  <div className="event-detail">
                    <span className="detail-icon">🕐</span>
                    <span>{event.time}</span>
                  </div>
                  <div className="event-detail">
                    <span className="detail-icon">📍</span>
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="event-description">{event.description}</p>
                <div className="event-participants">
                  <span>{event.currentParticipants} / {event.maxParticipants} registered</span>
                  <div className="participants-bar">
                    <div 
                      className="participants-fill"
                      style={{ width: `${(event.currentParticipants / event.maxParticipants) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <button
                  className="btn btn-red event-register"
                  onClick={() => handleRegister(event)}
                  disabled={!event.registrationOpen}
                >
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="events-info section">
        <div className="container">
          <h2>Event Information</h2>
          <div className="info-grid">
            <div className="info-card">
              <h3>📋 Registration</h3>
              <p>Register for events through our contact form or WhatsApp. Early registration recommended as spots fill quickly.</p>
            </div>
            <div className="info-card">
              <h3>💰 Pricing</h3>
              <p>Most community events are free for members. Some special workshops may have a nominal fee.</p>
            </div>
            <div className="info-card">
              <h3>👥 Community</h3>
              <p>All events are designed to be inclusive and welcoming. All fitness levels are encouraged to participate.</p>
            </div>
            <div className="info-card">
              <h3>📱 Updates</h3>
              <p>Follow us on social media for event updates, schedule changes, and new event announcements.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}









