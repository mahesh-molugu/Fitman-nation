import './HeroVideo.css'

export default function HeroVideo() {
  return (
    <section className="hero-video-section">
      <div className="video-container">
        <video 
          className="hero-video" 
          autoPlay 
          muted 
          loop 
          playsInline
          poster="/images/hero-video-poster.jpg"
        >
          <source src="/videos/hero-treadmill.mp4" type="video/mp4" />
          <source src="/videos/hero-treadmill.webm" type="video/webm" />
          {/* Fallback image if video doesn't load */}
          <img src="/images/hero-treadmill-fallback.jpg" alt="Clients running on treadmill watching mentor class" />
        </video>
        <div className="video-overlay"></div>
        <div className="video-content">
          <h2>Train Together, Achieve Together</h2>
          <p>Watch our members transform their lives with real-time mentor guidance</p>
        </div>
      </div>
    </section>
  )
}







