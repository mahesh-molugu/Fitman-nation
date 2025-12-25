import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>FitMan Nation</h3>
            <p className="footer-tagline">Train Smarter. With Mentors.</p>
            <p className="footer-description">
              Empowering individuals to achieve their fitness goals through 
              personalized mentorship and community support.
            </p>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                📷
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                ▶️
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                👥
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                💬
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/programs">Programs</Link></li>
              <li><Link to="/how-it-works">How It Works</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/online-classes">Online Classes</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <ul className="footer-links">
              <li><Link to="/success-stories">Success Stories</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/contact#faq">FAQ</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <ul className="footer-contact">
              <li>
                <span className="contact-icon">📧</span>
                <a href="mailto:support@fitmannation.com">support@fitmannation.com</a>
              </li>
              <li>
                <span className="contact-icon">💬</span>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
              <li>
                <span className="contact-icon">📞</span>
                <a href="tel:+919876543210">+91 98765 43210</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <p>&copy; {currentYear} FitMan Nation. All rights reserved.</p>
            <div className="legal-links">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-of-service">Terms of Service</Link>
              <Link to="/refund-policy">Refund Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
