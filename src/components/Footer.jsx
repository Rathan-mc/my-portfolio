import React from 'react'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} · Built with React &amp; deployed via Git, GitHub Actions &amp; Netlify.</p>
        <p>Designed to showcase full‑stack and DevOps skills of Rathan M C.</p>
      </div>
    </footer>
  )
}
