import { useTheme } from '../contexts/ThemeContext'
import './ThemeToggle.css'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Theme: ${theme === 'light' ? 'Light mode, switch to Dark mode' : 'Dark mode, switch to Light mode'}`}
    >
      <span className="theme-icon">{theme === 'light' ? '🌙' : '☀️'}</span>
      <span className="theme-label">{theme === 'light' ? 'Dark' : 'Light'}</span>
    </button>
  )
}

export default ThemeToggle
