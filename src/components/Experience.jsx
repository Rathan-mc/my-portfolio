import React from 'react'

const ExperienceCard = ({ role, company, period, points, badge }) => (
  <article className="timeline-card">
    <header className="timeline-card__header">
      <div>
        <h3>{role}</h3>
        <p className="timeline-card__company">{company}</p>
      </div>
      <span className="timeline-card__period">{period}</span>
    </header>
    {badge && <span className="timeline-card__badge">{badge}</span>}
    <ul className="timeline-card__list">
      {points.map((p, idx) => (
        <li key={idx}>{p}</li>
      ))}
    </ul>
  </article>
)

export function Experience() {
  return (
    <div className="section__inner container">
      <header className="section__header">
        <h2>Experience</h2>
        <p>Hands‑on work in full‑stack development, simulation platforms, and production pipelines.</p>
      </header>

      <div className="timeline">
        <ExperienceCard
          role="Engineer"
          company="L&T Technology Services"
          period="Jul 2024 – Present"
          badge=".NET · React · Azure DevOps"
          points={[
            'Built and integrated REST APIs in .NET Core with React.js frontends for a full‑stack simulation platform.',
            'Automated CI/CD workflows with Azure DevOps, reducing deployment time by ~30%.',
            'Optimized SQL Server stored procedures and indexing to improve query performance.',
            'Developed reusable UI components inspired by Material UI for internal tools.',
            'Collaborated in Agile sprints, reducing testing cycle time by about 25%.'
          ]}
        />

        <ExperienceCard
          role="Full‑Stack Intern"
          company="Orbfocus Pvt Ltd"
          period="Oct 2023 – Nov 2023"
          badge="React · API Integration"
          points={[
            'Built reusable React components and integrated them with secure backend APIs.',
            'Improved frontend performance using lazy loading and modular architecture.',
            'Worked closely with product teams to align UI with business requirements.'
          ]}
        />

        <article className="timeline-card timeline-card--education">
          <header className="timeline-card__header">
            <div>
              <h3>B.E. Computer Science and Engineering</h3>
              <p className="timeline-card__company">Vidyavardhaka College of Engineering</p>
            </div>
            <span className="timeline-card__period">2020 – 2024 · CGPA: 8.22</span>
          </header>
        </article>
      </div>
    </div>
  )
}
