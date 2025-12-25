import './Memberships.css'

export default function Memberships({onBack}){
  return (
    <div className="placeholder-page">
      <button className="link-back" onClick={onBack}>← Back</button>
      <h2>Memberships</h2>
      <p>Placeholder for membership plans and checkout flow.</p>
    </div>
  )
}
