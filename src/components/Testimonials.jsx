import './Testimonials.css'

export default function Testimonials(){
  const items = [
    {name:'Asha', text:'I transformed my routine with mentor support.'},
    {name:'Ravi', text:'Flexible scheduling made fitness fit my work life.'},
    {name:'Meera', text:'Community events kept me motivated.'}
  ]
  return (
    <section className="testimonials">
      <h2>Success Stories</h2>
      <div className="test-grid">
        {items.map((t, idx)=> (
          <blockquote key={idx} className="test-card">
            <p>“{t.text}”</p>
            <footer>- {t.name}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
