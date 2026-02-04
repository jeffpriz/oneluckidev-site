import { Link } from 'react-router-dom'
import DadJoke from '../components/DadJoke'
import './Home.css'

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <img src="/images/profile.jpg" alt="Profile Picture" className="profile-img" 
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                target.style.display = 'flex'
                target.style.alignItems = 'center'
                target.style.justifyContent = 'center'
                target.style.fontSize = '4rem'
                target.textContent = '👨‍💻'
              }}
            />
            <h1 className="hero-title">Hello, I'm <span className="highlight">Jeff Przylucki</span> <br />  One Lucki Dev</h1>
            <p className="hero-subtitle">Application Developer & DevOps Engineer</p>
            <p className="hero-description">
              Passionate about building scalable applications and streamlining development workflows through modern DevOps practices.
            </p>
            <div className="hero-cta">
              <Link to="/experience" className="btn btn-primary">View My Work</Link>
              <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
            </div>
          </div>
        </div>
      </section>
      <DadJoke />
    </>
  )
}

export default Home
