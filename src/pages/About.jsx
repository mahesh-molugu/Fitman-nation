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
              FitMan Nation was built with a simple belief — fitness should be practical, sustainable, 
              and accessible to everyone. We focus on real-world transformation by combining structured 
              workouts, lifestyle-friendly routines, and consistent accountability that fits into everyday 
              life, not just the gym.
            </p>
            <p>
              Our mission is to empower individuals to take control of their health through disciplined 
              training, smart nutrition, and a strong support system. Our vision is to build India's most 
              trusted fitness community where transformation is not temporary, but a lifelong mindset 
              supported by people, purpose, and progress.
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
                To empower individuals to take control of their health through disciplined training, 
                smart nutrition, and a strong support system.
              </p>
            </div>
            <div className="mv-card">
              <h3>Our Vision</h3>
              <p>
                To build India's most trusted fitness community where transformation is not temporary, 
                but a lifelong mindset supported by people, purpose, and progress.
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
              <h3>Personalized Training</h3>
              <p>Structured workouts tailored to your goals, body type, and lifestyle.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🧬</div>
              <h3>Science-Backed Nutrition</h3>
              <p>Evidence-based diet strategies that support your transformation goals.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">✅</div>
              <h3>Accountability & Discipline</h3>
              <p>Real human accountability to keep you consistent and motivated.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🤝</div>
              <h3>Community & Support</h3>
              <p>A powerful support system with like-minded individuals on the same journey.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🌱</div>
              <h3>Sustainable Lifestyle Approach</h3>
              <p>Long-term transformation that fits into your everyday life, not just the gym.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team section">
        <div className="container">
          <h2 className="section-title">Meet Our Coaches & Mentors</h2>
          <p className="section-subtitle">
            Our mentors are certified professionals dedicated to your success.
          </p>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-image-wrapper">
                <img 
                  src="/images/mentors/expert-mentor.jpg" 
                  alt="Expert Mentor" 
                  className="team-image"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextElementSibling.style.display = 'block'
                  }}
                />
                <div className="team-avatar" style={{display: 'none'}}>👨‍💼</div>
              </div>
              <h3>Expert Mentors</h3>
              <p>Certified trainers with years of experience in fitness, nutrition, and adaptive training.</p>
            </div>
            <div className="team-card">
              <div className="team-image-wrapper">
                <img 
                  src="/images/mentors/nutrition-specialist.jpg" 
                  alt="Nutrition Specialist" 
                  className="team-image"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextElementSibling.style.display = 'block'
                  }}
                />
                <div className="team-avatar" style={{display: 'none'}}>👩‍⚕️</div>
              </div>
              <h3>Nutrition Specialists</h3>
              <p>Registered dietitians who create meal plans tailored to your goals and preferences.</p>
            </div>
            <div className="team-card">
              <div className="team-image-wrapper">
                <img 
                  src="/images/mentors/strength-coach.jpg" 
                  alt="Strength Coach" 
                  className="team-image"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextElementSibling.style.display = 'block'
                  }}
                />
                <div className="team-avatar" style={{display: 'none'}}>🏋️</div>
              </div>
              <h3>Strength Coaches</h3>
              <p>Specialists in strength training, mobility, and injury prevention.</p>
            </div>
            <div className="team-card">
              <div className="team-image-wrapper">
                <img 
                  src="/images/mentors/wellness-guide.jpg" 
                  alt="Wellness Guide" 
                  className="team-image"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextElementSibling.style.display = 'block'
                  }}
                />
                <div className="team-avatar" style={{display: 'none'}}>🧘</div>
              </div>
              <h3>Wellness Guides</h3>
              <p>Yoga and mindfulness instructors for holistic health and recovery.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}



