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
          <a href="https://github.com/jeffpriz" className="contact-link" target="_blank" rel="noopener noreferrer">
            <span className="contact-icon">🔗</span>
            <span>GitHub</span>
          </a>
          <a href="https://marketplace.visualstudio.com" className="contact-link" target="_blank" rel="noopener noreferrer">
            <span className="contact-icon">📦</span>
            <span>Azure DevOps Marketplace</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
