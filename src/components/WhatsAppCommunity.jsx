import './WhatsAppCommunity.css'

export default function WhatsAppCommunity() {
  const handleJoinWhatsApp = () => {
    // Track conversion
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        event_category: 'WhatsApp Community',
        event_label: 'Join WhatsApp'
      })
    }
    // Open WhatsApp
    window.open('https://wa.me/919876543210?text=Hi! I want to join the FitMan Nation WhatsApp community.', '_blank')
  }

  return (
    <section className="whatsapp-community section">
      <div className="container">
        <div className="whatsapp-content">
          <div className="whatsapp-icon">💬</div>
          <h2>Join Our WhatsApp Fitness Community</h2>
          <p>
            Get daily fitness tips, workout updates, event alerts, motivation, and direct access 
            to the FitMan Nation community.
          </p>
          <button className="btn btn-red whatsapp-btn" onClick={handleJoinWhatsApp}>
            👉 Join WhatsApp Community
          </button>
        </div>
      </div>
    </section>
  )
}







