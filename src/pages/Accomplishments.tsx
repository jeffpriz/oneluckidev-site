import './Accomplishments.css'

const Accomplishments = () => {
  return (
    <section className="accomplishments">
      <div className="container">
        <h2 className="section-title">Accomplishments & Published Work</h2>
        
        <div className="accomplishment-category">
          <h3 className="category-title">Azure DevOps Marketplace Extensions</h3>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-header">
                <div className="project-icon">🔌</div>
                <h4>Custom Extensions</h4>
              </div>
              <p>
                Published custom extensions to the Azure DevOps Marketplace, helping teams streamline their 
                development workflows and improve productivity.
              </p>
              <div className="project-tags">
                <span className="tag">Azure DevOps</span>
                <span className="tag">TypeScript</span>
                <span className="tag">Marketplace</span>
              </div>
            </div>
          </div>
        </div>

        <div className="accomplishment-category">
          <h3 className="category-title">Professional Achievements</h3>
          <div className="achievements-list">
            <div className="achievement-item">
              <div className="achievement-icon">🏆</div>
              <div className="achievement-content">
                <h4>DevOps Transformation</h4>
                <p>
                  Led DevOps transformation initiatives, implementing automated CI/CD pipelines that reduced 
                  deployment time and increased reliability.
                </p>
              </div>
            </div>
            <div className="achievement-item">
              <div className="achievement-icon">🚀</div>
              <div className="achievement-content">
                <h4>Application Modernization</h4>
                <p>
                  Modernized legacy applications using contemporary technologies and cloud-native architectures, 
                  improving performance and maintainability.
                </p>
              </div>
            </div>
            <div className="achievement-item">
              <div className="achievement-icon">📚</div>
              <div className="achievement-content">
                <h4>Knowledge Sharing</h4>
                <p>
                  Contributing to the developer community through published extensions, documentation, and best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Accomplishments
