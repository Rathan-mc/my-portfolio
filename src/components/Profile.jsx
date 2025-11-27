import React from 'react'

const ProfileCard = ({ platform, username, profileUrl, description, stats, avatar }) => (
  <div className="profile-card" onClick={() => window.open(profileUrl, '_blank')}>
    <div className="profile-card__header">
      <div className="profile-card__avatar">
        <img src={avatar} alt={`${platform} avatar`} />
      </div>
      <div className="profile-card__info">
        <h3>{platform}</h3>
        <p className="profile-card__username">@{username}</p>
      </div>
      <div className="profile-card__badge">
        <span>View Profile</span>
      </div>
    </div>
    <p className="profile-card__description">{description}</p>
    <div className="profile-card__stats">
      {stats.map((stat, index) => (
        <div key={index} className="profile-stat">
          <span className="profile-stat__number">{stat.number}</span>
          <span className="profile-stat__label">{stat.label}</span>
        </div>
      ))}
    </div>
  </div>
)

export function Profile() {
  return (
    <div className="section__inner container">
      <header className="section__header">
        <h2>Connect With Me</h2>
        <p>
          Follow my professional journey and explore my code repositories.
          Let's connect and collaborate on exciting projects!
        </p>
      </header>

      <div className="profiles-grid">
        <ProfileCard
          platform="LinkedIn"
          username="rathan-m-c"
          profileUrl="https://linkedin.com/in/rathan-m-c"
          description="Full-Stack Developer & DevOps Engineer at L&T Technology Services. Passionate about building scalable systems and automated delivery pipelines."
          avatar="/Linkedin.jpg"
          stats={[
            { number: "500+", label: "Connections" },
            { number: "2+", label: "Years Experience" },
            { number: "10+", label: "Projects" }
          ]}
        />
        
        <ProfileCard
          platform="GitHub"
          username="rathan-mc"
          profileUrl="https://github.com/rathan-mc"
          description="Explore my repositories featuring .NET Core APIs, React applications, DevOps pipelines, and full-stack projects with modern tech stacks."
          avatar="https://github.com/rathan-mc.png"
          stats={[
            { number: "15+", label: "Repositories" },
            { number: "100+", label: "Commits" },
            { number: "5+", label: "Languages" }
          ]}
        />
      </div>

      <div className="pipeline-note">
        <p>
          <strong>Let's collaborate!</strong> I'm always open to discussing new opportunities,
          sharing knowledge, and working on innovative projects together.
        </p>
      </div>
    </div>
  )
}