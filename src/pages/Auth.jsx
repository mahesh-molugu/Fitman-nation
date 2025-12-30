import './Auth.css'

export default function Auth({onBack}){
  return (
    <div className="placeholder-page">
      <button className="link-back" onClick={onBack}>← Back</button>
      <h2>Login / Signup</h2>
      <p>Placeholder for authentication component (login & signup).</p>
    </div>
  )
}
