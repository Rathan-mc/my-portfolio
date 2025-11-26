import React from 'react'

export function Hero() {
  return (
    <div className="hero container">
      <div className="hero__content">
        <p className="hero__eyebrow">Full‑Stack Developer · DevOps Engineer</p>
        <h1 className="hero__title">
          Building reliable APIs, scalable systems & automated delivery pipelines.
        </h1>
        <p className="hero__subtitle">
          I&apos;m a software engineer specializing in C#, .NET, React, and CI/CD automation.
          I design and build RESTful APIs, modern web interfaces, and cloud‑ready architectures
          that are easy to deploy, observe, and scale.
        </p>

        <div className="hero__meta">
          <div>
            <h3>Currently</h3>
            <p>Engineer @ L&amp;T Technology Services</p>
          </div>
          <div>
            <h3>Location</h3>
            <p>India · Open to remote roles</p>
          </div>
          <div>
            <h3>Experience</h3>
            <p>Full‑stack &amp; DevOps since 2023</p>
          </div>
        </div>

        <div className="hero__cta">
          <a href="#projects" className="btn btn--primary">View Projects</a>
          <a href="#contact" className="btn btn--ghost">Hire Me</a>
        </div>

        <div className="hero__tags">
          <span>.NET Core</span>
          <span>React.js</span>
          <span>Azure DevOps</span>
          <span>Docker</span>
          <span>CI/CD</span>
        </div>
      </div>

      <aside className="hero__sidebar">
        <div className="hero__photo-wrapper">
          <img
            src="/profile-placeholder.txt"
            alt="Your profile"
            className="hero__photo"
          />
        </div>
        <div className="hero__card">
          <h3>Quick Info</h3>
          <ul>
            <li><strong>Phone:</strong> +91 90086 30039</li>
            <li><strong>Email:</strong> <a href="mailto:rathanbabu2307@gmail.com">rathanbabu2307@gmail.com</a></li>
            <li>
              <strong>LinkedIn:</strong>{' '}
              <a href="https://linkedin.com/in/rathan-m-c" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/rathan-m-c
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  )
}
