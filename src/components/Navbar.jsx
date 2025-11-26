import React, { useState } from 'react'

export function Navbar({ sections, activeSection, onThemeToggle, theme }) {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    const y = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top: y, behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className="navbar">
      <div className="navbar__inner container">
        <div className="navbar__brand" onClick={() => scrollTo('about')}>
          <span className="navbar__logo">RM</span>
          <div className="navbar__title">
            <span className="navbar__name">Rathan M C</span>
            <span className="navbar__subtitle">Full‑Stack & DevOps Engineer</span>
          </div>
        </div>

        <nav className={`navbar__nav ${open ? 'navbar__nav--open' : ''}`}>
          {sections.map((s) => (
            <button
              key={s.id}
              className={`navbar__link ${activeSection === s.id ? 'navbar__link--active' : ''}`}
              onClick={() => scrollTo(s.id)}
            >
              {s.label}
            </button>
          ))}
        </nav>

        <div className="navbar__actions">
          <button
            className="navbar__theme-toggle"
            aria-label="Toggle theme"
            onClick={onThemeToggle}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button
            className="navbar__menu"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  )
}
