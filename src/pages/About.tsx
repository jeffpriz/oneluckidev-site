import './About.css'

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a dedicated application developer and DevOps engineer with a passion for creating efficient, 
              scalable solutions. My expertise spans across full-stack development and implementing robust CI/CD pipelines.
            </p>
            <p>
              With years of experience in software development and operations, I specialize in bridging the gap 
              between development and deployment, ensuring smooth and reliable software delivery.
            </p>
            <div className="skills">
              <h3>Core Skills</h3>
              <div className="skill-tags">
                <span className="skill-tag">Azure DevOps</span>
                <span className="skill-tag">CI/CD</span>
                <span className="skill-tag">Application Development</span>
                <span className="skill-tag">.NET</span>
                <span className="skill-tag">Cloud Infrastructure</span>
                <span className="skill-tag">Automation</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Agile</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
