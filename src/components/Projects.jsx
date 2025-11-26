import React from 'react'

const ProjectCard = ({ title, stack, role, impact, details, highlight }) => (
  <article className="project-card">
    <header className="project-card__header">
      <div>
        <h3>{title}</h3>
        <p className="project-card__stack">{stack}</p>
      </div>
      {highlight && <span className="project-card__highlight">{highlight}</span>}
    </header>
    <p className="project-card__role">{role}</p>
    <ul className="project-card__list">
      {details.map((d, idx) => (
        <li key={idx}>{d}</li>
      ))}
    </ul>
    <p className="project-card__impact">{impact}</p>
  </article>
)

export function Projects() {
  return (
    <div className="section__inner container">
      <header className="section__header">
        <h2>Projects</h2>
        <p>
          Selected work that showcases my ability to design APIs, build UIs, and reason about performance
          and scalability.
        </p>
      </header>

      <div className="projects-grid">
        <ProjectCard
          title="Simulation Job Queue System"
          stack=".NET Core · SQL Server · EF Core"
          role="Backend‑heavy full‑stack solution for managing simulation workloads."
          highlight="Latency −30%"
          details={[
            'Designed a multi‑threaded job queue with scheduling, role‑based access, and background workers.',
            'Implemented efficient data access using EF Core and hand‑tuned SQL for critical paths.',
            'Instrumented logging and metrics to observe queue depth, processing time, and failures.'
          ]}
          impact="Reduced overall latency by ~30% via schema tuning and background worker optimization."
        />

        <ProjectCard
          title="Smart IoT Control Platform"
          stack="React.js · .NET Core · JWT"
          role="End‑to‑end system for managing home automation based on location and triggers."
          highlight="+20% Faster APIs"
          details={[
            'Built a responsive React interface for configuring locations, devices, and automation rules.',
            'Developed secure .NET Core APIs with JWT authentication and role‑based access control.',
            'Used async/await and non‑blocking I/O to improve API responsiveness.'
          ]}
          impact="Achieved ~20% faster average response time through asynchronous API optimization."
        />

        <ProjectCard
          title="Personalized Ad Recommendation System"
          stack="Python · ECLAT · Apriori"
          role="Academic project focused on data‑driven recommendations."
          details={[
            'Implemented association rule mining to segment customers and evaluate targeting strategies.',
            'Generated frequent itemsets using ECLAT and tuned support/confidence thresholds.',
            'Experimented with Apriori to compare rule coverage and precision.'
          ]}
          impact="Improved personalization by discovering high‑value item combinations and user segments."
        />
      </div>
    </div>
  )
}
