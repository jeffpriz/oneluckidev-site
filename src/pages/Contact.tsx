import './Contact.css'

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-description">
          Interested in collaborating or learning more about my work? Feel free to reach out!
        </p>
        <div className="contact-links">
          <a href="mailto:jeff@oneluckidev.com" className="contact-link">
            <span className="contact-icon">📧</span>
            <span>Email</span>
          </a>
          <a href="https://www.linkedin.com/in/jeffpriz/" className="contact-link" target="_blank" rel="noopener noreferrer">
            <span className="contact-icon">💼</span>
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/jeffpriz" className="contact-link" target="_blank" rel="noopener noreferrer">
            <span className="contact-icon">🔗</span>
            <span>GitHub</span>
          </a>
          <a href="https://marketplace.visualstudio.com/publishers/OneLuckiDev" className="contact-link" target="_blank" rel="noopener noreferrer">
            <span className="contact-icon">📦</span>
            <span>Azure DevOps Marketplace</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
