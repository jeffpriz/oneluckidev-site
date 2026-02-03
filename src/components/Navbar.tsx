import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="nav-brand">
          <img src="/images/OLDevLogoBanner.png" alt="OneLuckiDev Logo" className="nav-logo" 
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
              const textLogo = document.createElement('span')
              textLogo.textContent = 'OneLuckiDev'
              textLogo.className = 'nav-brand-text'
              target.parentElement?.appendChild(textLogo)
            }}
          />
        </Link>
        <ul className="nav-menu">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/accomplishments">Accomplishments</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
