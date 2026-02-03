import { useState } from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="nav-brand" onClick={closeMenu}>
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
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/experience" onClick={closeMenu}>Experience</Link></li>
          <li><Link to="/accomplishments" onClick={closeMenu}>Accomplishments</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
        <div className="nav-right">
          <ThemeToggle />
          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
