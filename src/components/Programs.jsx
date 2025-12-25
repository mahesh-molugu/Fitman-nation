import './Programs.css'

export default function Programs(){
  return (
    <section className="programs">
      <h2>Program Overview</h2>
      <div className="program-grid">
        <div className="program-card">
          <h4>Beginner Foundations</h4>
          <p>Easy-to-follow plans focused on safe progression.</p>
        </div>
        <div className="program-card">
          <h4>Advanced Strength</h4>
          <p>High intensity and periodized coaching for results.</p>
        </div>
        <div className="program-card">
          <h4>Adaptive & Medical</h4>
          <p>Programs designed with medical safety and accessibility.</p>
        </div>
      </div>
    </section>
  )
}
