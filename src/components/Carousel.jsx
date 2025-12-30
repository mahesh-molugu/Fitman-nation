import { useState, useEffect, useRef } from 'react'
import './Carousel.css'
import fitness from '../assets/fitness.svg'
import nutrition from '../assets/nutrition.svg'
import community from '../assets/community.svg'

export default function Carousel(){
  const slides = [
    {title:'Fitness Plans', desc:'Tailored workouts for all levels', image: fitness},
    {title:'Nutrition', desc:'Diet plans that match your lifestyle', image: nutrition},
    {title:'Community', desc:'Local events and group classes', image: community}
  ]

  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef(null)
  const touchDelta = useRef(0)
  const autoplayRef = useRef(null)

  useEffect(()=>{
    if(paused) return
    autoplayRef.current = setInterval(()=>{
      setIndex(i => (i+1) % slides.length)
    }, 2000)
    return ()=>clearInterval(autoplayRef.current)
  }, [paused, slides.length])

  function go(n){
    setIndex(() => ((n % slides.length) + slides.length) % slides.length)
  }

  function prev(){
    go(index - 1)
    restartAutoplay()
  }
  function next(){
    go(index + 1)
    restartAutoplay()
  }

  function restartAutoplay(){
    setPaused(true)
    setTimeout(()=>setPaused(false), 1200)
  }

  function onTouchStart(e){
    touchStartX.current = e.touches[0].clientX
    touchDelta.current = 0
    setPaused(true)
  }
  function onTouchMove(e){
    if(touchStartX.current == null) return
    touchDelta.current = e.touches[0].clientX - touchStartX.current
  }
  function onTouchEnd(){
    const d = touchDelta.current
    if(Math.abs(d) > 50){
      if(d > 0) prev(); else next()
    }
    touchStartX.current = null
    touchDelta.current = 0
    setPaused(false)
  }

  return (
    <>
    <section className="carousel" aria-label="What we do carousel">
      <div className="carousel-viewport"
        onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)}
        onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}
      >
        <div className="carousel-track" style={{transform:`translateX(-${index * 100}%)`}}>
          {slides.map((s, idx) => (
            <figure className="carousel-slide" key={idx}>
              <img src={s.image} alt={s.title} />
              <figcaption className="carousel-caption">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <button className="carousel-arrow left" onClick={prev} aria-label="Previous slide">‹</button>
        <button className="carousel-arrow right" onClick={next} aria-label="Next slide">›</button>
      </div>

    </section>

    <div className="carousel-dots" aria-hidden={false}>
      {slides.map((_, i) => (
        <button key={i} className={`dot ${i===index? 'active':''}`} onClick={()=>{go(i); restartAutoplay()}} aria-label={`Go to slide ${i+1}`}></button>
      ))}
    </div>
    </>
  )
}
