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
                <div className="project-icon">📊</div>
                <h4>Pull Request Completion Report</h4>
              </div>
              <p>
                Provides statistical insights into your Pull Request process including average PR open time, 
                trend analysis, target branch distribution, and reviewer voting patterns. Helps teams optimize 
                their code review workflow.
              </p>
              <div className="project-links">
                <a href="https://marketplace.visualstudio.com/items?itemName=OneLuckiDev.prApprovalReport" 
                   target="_blank" rel="noopener noreferrer" className="project-link">
                  View on Marketplace
                </a>
                <a href="https://github.com/jeffpriz/devops-pr-stats" 
                   target="_blank" rel="noopener noreferrer" className="project-link">
                  GitHub (28 ⭐)
                </a>
              </div>
              <div className="project-tags">
                <span className="tag">Azure Repos</span>
                <span className="tag">Pull Requests</span>
                <span className="tag">Analytics</span>
                <span className="tag">TypeScript</span>
              </div>
            </div>
            <div className="project-card">
              <div className="project-header">
                <div className="project-icon">📚</div>
                <h4>Wiki Age Report</h4>
              </div>
              <p>
                Identifies stale and out-of-date documentation in your Azure DevOps Wiki. Tracks the age of 
                wiki pages and allows creating work items for outdated documentation, helping teams maintain 
                accurate and current documentation.
              </p>
              <div className="project-links">
                <a href="https://marketplace.visualstudio.com/items?itemName=OneLuckiDev.wikiAge" 
                   target="_blank" rel="noopener noreferrer" className="project-link">
                  View on Marketplace
                </a>
                <a href="https://github.com/jeffpriz/ado-wiki-age-report" 
                   target="_blank" rel="noopener noreferrer" className="project-link">
                  GitHub
                </a>
              </div>
              <div className="project-tags">
                <span className="tag">Azure Repos</span>
                <span className="tag">Documentation</span>
                <span className="tag">Wiki</span>
                <span className="tag">TypeScript</span>
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
