import './Experience.css'

const Experience = () => {
  return (
    <section className="experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="experience-grid">
          <div className="experience-card">
            <div className="card-icon">💻</div>
            <h3>Application Developer</h3>
            <p>
              Designing and developing robust, scalable applications using modern frameworks and best practices. 
              Focus on clean code, maintainability, and user experience.
            </p>
            <ul className="experience-highlights">
              <li>Full-stack web application development</li>
              <li>API design and implementation</li>
              <li>Database design and optimization</li>
              <li>Code review and quality assurance</li>
            </ul>
          </div>
          <div className="experience-card">
            <div className="card-icon">⚙️</div>
            <h3>DevOps Engineer</h3>
            <p>
              Implementing and maintaining CI/CD pipelines, automating infrastructure, and improving development 
              workflows for faster and more reliable deployments.
            </p>
            <ul className="experience-highlights">
              <li>Azure DevOps pipeline configuration</li>
              <li>Infrastructure as Code (IaC)</li>
              <li>Continuous Integration/Deployment</li>
              <li>Monitoring and logging solutions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
