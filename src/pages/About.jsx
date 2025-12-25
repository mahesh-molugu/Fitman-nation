import './About.css'

export default function About() {
  return (
    <div className="about-page">
      <section className="about-hero section">
        <div className="container">
          <h1 className="page-title">About FitMan Nation</h1>
          <p className="page-subtitle">
            Train Smarter. With Mentors. That's not just our tagline—it's our promise.
          </p>
        </div>
      </section>

      <section className="brand-story section">
        <div className="container">
          <h2 className="section-title">Our Story</h2>
          <div className="story-content">
            <p>
              FitMan Nation was born from a simple belief: everyone deserves access to quality fitness 
              guidance, regardless of their starting point, schedule, or physical limitations. We saw 
              too many people struggling alone, following generic programs that didn't fit their lives 
              or their bodies.
            </p>
            <p>
              Our platform connects you with experienced mentors who understand that fitness isn't 
              one-size-fits-all. Whether you're a busy professional, a parent juggling responsibilities, 
              someone with mobility challenges, or an athlete seeking the next level, we create 
              personalized plans that work for you.
            </p>
          </div>
        </div>
      </section>

      <section className="mission-vision section">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mv-card">
              <h3>Our Mission</h3>
              <p>
                To empower individuals of all backgrounds and abilities to achieve their fitness goals 
                through personalized mentorship, evidence-based training, and a supportive community 
                that celebrates every step of the journey.
              </p>
            </div>
            <div className="mv-card">
              <h3>Our Vision</h3>
              <p>
                To become the leading fitness platform where personalized coaching, community connection, 
                and adaptive programming make health and wellness accessible to everyone, everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-fitman section">
        <div className="container">
          <h2 className="section-title">Why FitMan Nation?</h2>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">🎯</div>
              <h3>Personalized Plans</h3>
              <p>Every program is tailored to your goals, schedule, and fitness level.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">👥</div>
              <h3>Expert Mentors</h3>
              <p>Learn from certified trainers who guide and motivate you every step.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🏃</div>
              <h3>Flexible Scheduling</h3>
              <p>Work out on your time, whether at home, gym, or on the go.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">❤️</div>
              <h3>Inclusive & Adaptive</h3>
              <p>Programs designed for all abilities, including medical-safe options.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🤝</div>
              <h3>Community Support</h3>
              <p>Join events, challenges, and connect with like-minded individuals.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">📊</div>
              <h3>Track Progress</h3>
              <p>Monitor your journey with tools and regular check-ins.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team section">
        <div className="container">
          <h2 className="section-title">Meet The Team</h2>
          <p className="section-subtitle">
            Our mentors are certified professionals dedicated to your success.
          </p>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar">👨‍💼</div>
              <h3>Expert Mentors</h3>
              <p>Certified trainers with years of experience in fitness, nutrition, and adaptive training.</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">👩‍⚕️</div>
              <h3>Nutrition Specialists</h3>
              <p>Registered dietitians who create meal plans tailored to your goals and preferences.</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">🏋️</div>
              <h3>Strength Coaches</h3>
              <p>Specialists in strength training, mobility, and injury prevention.</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">🧘</div>
              <h3>Wellness Guides</h3>
              <p>Yoga and mindfulness instructors for holistic health and recovery.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


