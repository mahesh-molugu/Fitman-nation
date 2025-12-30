import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../services/api'
import { getCurrentUser, getSessionId } from '../utils/auth'
import './Hero.css'
import heroMp4 from '../assets/hero.mp4'

export default function Hero() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const playAttempts = useRef(0)

  useEffect(() => {
    const v = videoRef.current

    function tryPlay() {
      if (!v) return
      const p = v.play()
      if (p !== undefined) {
        p.then(() => {
          setIsPlaying(!v.paused)
        }).catch(() => {
          // autoplay blocked by browser; user interaction may be required
          setIsPlaying(false)
        })
      }
    }

    // initial attempt
    tryPlay()

    function onPause() {
      setIsPlaying(false)
      // try to resume a few times with backoff
      if (playAttempts.current < 3) {
        playAttempts.current += 1
        setTimeout(tryPlay, 400 * playAttempts.current)
      }
    }

    function onPlay() {
      setIsPlaying(true)
    }

    function onVisibilityChange() {
      if (document.visibilityState === 'visible') tryPlay()
    }

    function onUserInteraction() {
      tryPlay()
      // once user interacts, we can remove the listeners
      document.removeEventListener('touchstart', onUserInteraction)
      document.removeEventListener('click', onUserInteraction)
    }

    if (v) {
      v.addEventListener('pause', onPause)
      v.addEventListener('play', onPlay)
    }
    document.addEventListener('visibilitychange', onVisibilityChange)
    document.addEventListener('touchstart', onUserInteraction, { passive: true })
    document.addEventListener('click', onUserInteraction, { passive: true })

    return () => {
      if (v) {
        v.removeEventListener('pause', onPause)
        v.removeEventListener('play', onPlay)
      }
      document.removeEventListener('visibilitychange', onVisibilityChange)
      document.removeEventListener('touchstart', onUserInteraction)
      document.removeEventListener('click', onUserInteraction)
    }
  }, [])

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return

    if (v.paused) {
      v.play().catch(() => {})
    } else {
      v.pause()
    }
  }

  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <video 
          ref={videoRef}
          className="hero-bg-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          poster="/images/hero-video-poster.jpg"
        >
          <source src={heroMp4} type="video/mp4" />
          {/* Fallback to image if video doesn't load */}
        </video>
        <img 
          src="/images/hero-background.jpg" 
          alt="" 
          className="hero-bg-image"
          onError={(e) => {
            e.target.style.display = 'none'
          }}
        />
        <div className="hero-bg-overlay"></div>
        <button
          className={`hero-play-button ${isPlaying ? 'hidden' : ''}`}
          aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
          onClick={togglePlay}
        >
          {isPlaying ? '❚❚' : '▶'}
        </button>
      </div>

      <div className="hero-inner">
        <div className="hero-content">
          <h1 className="hero-title">
            Train Smarter.<br />
            <span className="highlight">With Mentors.</span>
          </h1>
          <p className="hero-sub">
            FitMan Nation is a fitness-first community built to transform lives through structured training, 
            smart nutrition, accountability, and a strong support ecosystem. We focus not just on physical 
            transformation, but on building long-term discipline, confidence, and a sustainable healthy lifestyle.
          </p>
          <div className="hero-ctas">
            <Link to="/contact" className="btn btn-red" onClick={async () => {
              const user = getCurrentUser()
              await api.trackEvent('CTA', 'click', 'Hero Get Started', user?.id?.toString(), getSessionId())
              if (window.gtag) {
                window.gtag('event', 'click', {
                  event_category: 'CTA',
                  event_label: 'Hero Get Started'
                })
              }
            }}>
              Get Started
            </Link>
            <Link to="/programs" className="btn btn-outline" onClick={async () => {
              const user = getCurrentUser()
              await api.trackEvent('CTA', 'click', 'Hero Join Now', user?.id?.toString(), getSessionId())
              if (window.gtag) {
                window.gtag('event', 'click', {
                  event_category: 'CTA',
                  event_label: 'Hero Join Now'
                })
              }
            }}>
              Join Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
