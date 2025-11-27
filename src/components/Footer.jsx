import React from 'react'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} Not just a portfolio — a live demo of my Full-Stack & DevOps engineering workflow.</p>
        <p>Designed by Rathan M C.</p>
      </div>
    </footer>
  )
}
