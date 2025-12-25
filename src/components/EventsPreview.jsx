import { Link } from 'react-router-dom'
import './EventsPreview.css'

export default function EventsPreview() {
  const upcomingEvents = [
    {
      title: 'Community 5K Run',
      date: 'March 15, 2024',
      type: 'Running Event',
      description: 'Join us for a fun community run in the park'
    },
    {
      title: 'Push-ups Challenge',
      date: 'March 20, 2024',
      type: 'Challenge',
      description: 'Test your strength in our monthly challenge'
    },
    {
      title: 'Yoga & Mindfulness',
      date: 'March 25, 2024',
      type: 'Workshop',
      description: 'Relax and rejuvenate with our yoga session'
    }
  ]

  return (
    <section className="events-preview section">
      <div className="container">
        <h2 className="section-title">Upcoming Events</h2>
        <p className="section-subtitle">
          Join our community events, challenges, and meetups. Connect, compete, and celebrate together.
        </p>
        <div className="events-grid">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="event-card">
              <div className="event-type">{event.type}</div>
              <h3>{event.title}</h3>
              <div className="event-date">{event.date}</div>
              <p>{event.description}</p>
              <Link to="/events" className="event-link">
                Learn More →
              </Link>
            </div>
          ))}
        </div>
        <div className="events-cta">
          <Link to="/events" className="btn btn-red">
            View All Events
          </Link>
        </div>
      </div>
    </section>
  )
}


