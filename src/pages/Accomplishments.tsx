import { useState } from 'react'
import './Accomplishments.css'

const Accomplishments = () => {
  const [showAllExtensions, setShowAllExtensions] = useState(false)

  const extensions = [
    {
      icon: "📊",
      title: "Pull Request Completion Report",
      description: "Provides statistical insights into your Pull Request process including average PR open time, trend analysis, target branch distribution, and reviewer voting patterns. Helps teams optimize their code review workflow.",
      marketplaceUrl: "https://marketplace.visualstudio.com/items?itemName=OneLuckiDev.prApprovalReport",
      githubUrl: "https://github.com/jeffpriz/devops-pr-stats",
      tags: ["Azure Repos", "Pull Requests", "Analytics", "TypeScript"]
    },
    {
      icon: "📚",
      title: "Wiki Age Report",
      description: "Identifies stale and out-of-date documentation in your Azure DevOps Wiki. Tracks the age of wiki pages and allows creating work items for outdated documentation, helping teams maintain accurate and current documentation.",
      marketplaceUrl: "https://marketplace.visualstudio.com/items?itemName=OneLuckiDev.wikiAge",
      githubUrl: "https://github.com/jeffpriz/ado-wiki-age-report",
      tags: ["Azure Repos", "Documentation", "Wiki", "TypeScript"]
    },
    {
      icon: "🔄",
      title: "Json to Variable",
      description: "Converts JSON configuration files into Azure DevOps pipeline variables dynamically. Streamlines pipeline configuration management by allowing JSON-based variable definitions that can be easily maintained and version-controlled.",
      marketplaceUrl: "https://marketplace.visualstudio.com/items?itemName=OneLuckiDev.json2variable",
      githubUrl: null,
      tags: ["Azure Pipelines", "Variables", "Configuration", "DevOps"]
    },
    {
      icon: "⏱️",
      title: "Work Item Flow Efficiency",
      description: "Analyzes work item flow metrics and calculates efficiency scores based on time spent in active vs. waiting states. Helps identify bottlenecks and optimize team workflow by measuring the ratio of value-added time to total cycle time.",
      marketplaceUrl: "https://marketplace.visualstudio.com/items?itemName=OneLuckiDev.wiTimeReport",
      githubUrl: null,
      tags: ["Azure Boards", "Work Items", "Analytics", "Agile"]
    },
    {
      icon: "🧪",
      title: "Release Web Smoke Test",
      description: "Automated smoke testing task for release pipelines that validates web application health after deployment. Performs HTTP requests to verify endpoints are responding correctly, ensuring basic functionality before proceeding with the release.",
      marketplaceUrl: "https://marketplace.visualstudio.com/items?itemName=OneLuckiDev.release-web-smoke-test-task",
      githubUrl: null,
      tags: ["Azure Pipelines", "Testing", "Releases", "Quality Assurance"]
    },
    {
      icon: "📦",
      title: "Nuspec NuGet Dependency Update",
      description: "Automates the process of updating NuGet package references in .nuspec files. Ensures dependency versions stay current and consistent across projects, reducing manual maintenance and preventing version conflicts.",
      marketplaceUrl: "https://marketplace.visualstudio.com/items?itemName=OneLuckiDev.nuspec-reference-update",
      githubUrl: null,
      tags: ["NuGet", "Dependencies", "Build", ".NET"]
    }
  ]

  const displayedExtensions = showAllExtensions ? extensions : extensions.slice(0, 3)

  return (
    <section className="accomplishments">
      <div className="container">
        <h2 className="section-title">Accomplishments & Published Work</h2>
        
        <div className="accomplishment-category">
          <h3 className="category-title">Azure DevOps Marketplace Extensions</h3>
          <div className="projects-grid">
            {displayedExtensions.map((ext, index) => (
              <div key={index} className="project-card">
                <div className="project-header">
                  <div className="project-icon">{ext.icon}</div>
                  <h4>{ext.title}</h4>
                </div>
                <p>{ext.description}</p>
                <div className="project-links">
                  <a href={ext.marketplaceUrl} 
                     target="_blank" rel="noopener noreferrer" className="project-link">
                    View on Marketplace
                  </a>
                  {ext.githubUrl && (
                    <a href={ext.githubUrl} 
                       target="_blank" rel="noopener noreferrer" className="project-link">
                      GitHub
                    </a>
                  )}
                </div>
                <div className="project-tags">
                  {ext.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {extensions.length > 3 && (
            <div className="show-more-container">
              <button 
                className="show-more-btn"
                onClick={() => setShowAllExtensions(!showAllExtensions)}
              >
                {showAllExtensions ? (
                  <>
                    <span>Show Less</span>
                    <span className="arrow">▲</span>
                  </>
                ) : (
                  <>
                    <span>Show More Extensions ({extensions.length - 3} more)</span>
                    <span className="arrow">▼</span>
                  </>
                )}
              </button>
            </div>
          )}
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
