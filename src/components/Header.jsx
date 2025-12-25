import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => location.pathname === path

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="brand">
          <span className="brand-name">FitMan Nation</span>
          <span className="brand-tagline">Train Smarter. With Mentors.</span>
        </Link>

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link to="/programs" className={`nav-link ${isActive('/programs') ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>
            Programs
          </Link>
          <Link to="/how-it-works" className={`nav-link ${isActive('/how-it-works') ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>
            How It Works
          </Link>
          <Link to="/events" className={`nav-link ${isActive('/events') ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>
            Events
          </Link>
          <Link to="/online-classes" className={`nav-link ${isActive('/online-classes') ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>
            Classes
          </Link>
          <Link to="/success-stories" className={`nav-link ${isActive('/success-stories') ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>
            Stories
          </Link>
          <Link to="/blog" className={`nav-link ${isActive('/blog') ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>
            Blog
          </Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
          <Link to="/contact" className="nav-cta btn btn-red" onClick={() => setIsMenuOpen(false)}>
            Get Started
          </Link>
        </nav>

        <button 
          className="menu-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
