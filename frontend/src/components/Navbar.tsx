import { useState } from 'react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu() {
    setIsMenuOpen((currentValue) => !currentValue)
  }

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header>
      <nav>
        <h1 className="logo">Gabriela Castaneda ✨</h1>
        <button
          type="button"
          className={`menu-toggle${isMenuOpen ? ' menu-toggle-open' : ''}`}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul id="primary-navigation" className={`nav-links${isMenuOpen ? ' nav-links-open' : ''}`}>
          <li>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar