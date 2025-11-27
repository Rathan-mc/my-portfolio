import React from 'react'

const SkillBadge = ({ label }) => {
  const handleClick = () => {
    // Add ripple effect
    const event = new CustomEvent('skillClicked', { detail: label });
    window.dispatchEvent(event);
  };

  return (
    <span 
      className="skill-badge" 
      onClick={handleClick}
      title={`Click to highlight ${label}`}
    >
      {label}
    </span>
  );
}

export function Skills() {
  return (
    <div className="section__inner container">
      <header className="section__header">
        <h2>Technical Skills</h2>
        <p>
          A balanced stack spanning backend, frontend, databases, and DevOps — geared towards building
          production‑ready systems.
        </p>
      </header>

      <div className="skills-grid">
        <div className="card">
          <h3>Backend · APIs</h3>
          <p>Designing RESTful services, domain‑driven logic, and secure authentication.</p>
          <div className="skills-list">
            <SkillBadge label="C#" />
            <SkillBadge label=".NET Core" />
            <SkillBadge label="ASP.NET Web API" />
            <SkillBadge label="JWT" />
            <SkillBadge label="Microservices" />
            <SkillBadge label="OOP / DSA" />
          </div>
        </div>

        <div className="card">
          <h3>Frontend · UX</h3>
          <p>Building responsive, component‑driven interfaces with modern JavaScript.</p>
          <div className="skills-list">
            <SkillBadge label="React.js" />
            <SkillBadge label="JavaScript" />
            <SkillBadge label="Bootstrap" />
            <SkillBadge label="Material UI" />
          </div>
        </div>

        <div className="card">
          <h3>Databases</h3>
          <p>Designing schemas, optimizing queries, and ensuring scalable data access.</p>
          <div className="skills-list">
            <SkillBadge label="SQL Server" />
            <SkillBadge label="MongoDB" />
            <SkillBadge label="Oracle SQL" />
            <SkillBadge label="EF Core" />
            <SkillBadge label="Query Optimization" />
          </div>
        </div>

        <div className="card">
          <h3>DevOps · Cloud</h3>
          <p>Automating builds, tests, and deployments with cloud platforms.</p>
          <div className="skills-list">
            <SkillBadge label="Azure DevOps" />
            <SkillBadge label="Jenkins" />
            <SkillBadge label="GitHub Actions" />
            <SkillBadge label="Docker" />
            <SkillBadge label="CI/CD Pipelines" />
            <SkillBadge label="Netlify" />
          </div>
        </div>

        <div className="card">
          <h3>Testing &amp; APIs</h3>
          <p>Ensuring reliability with test automation, monitoring, and API tooling.</p>
          <div className="skills-list">
            <SkillBadge label="xUnit" />
            <SkillBadge label="Postman" />
            <SkillBadge label="Swagger / OpenAPI" />
            <SkillBadge label="REST" />
          </div>
        </div>

        <div className="card">
          <h3>Ways of Working</h3>
          <p>Modern engineering practices for high‑quality delivery.</p>
          <div className="skills-list">
            <SkillBadge label="Agile / Scrum" />
            <SkillBadge label="Code Reviews" />
            <SkillBadge label="CI/CD" />
            <SkillBadge label="Simulation Platforms" />
          </div>
        </div>
      </div>
    </div>
  )
}
