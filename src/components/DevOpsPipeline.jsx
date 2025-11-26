import React from 'react'

const Step = ({ title, tools, description }) => (
  <div className="pipeline-step">
    <h3>{title}</h3>
    <p className="pipeline-step__tools">{tools}</p>
    <p>{description}</p>
  </div>
)

export function DevOpsPipeline() {
  return (
    <div className="section__inner container">
      <header className="section__header">
        <h2>DevOps &amp; Delivery</h2>
        <p>
          A modern DevOps toolchain with Git, GitHub Actions, Azure DevOps, Jenkins, Docker, and Netlify
          for fast, reliable releases.
        </p>
      </header>

      <div className="pipeline">
        <Step
          title="Plan & Code"
          tools="Git · GitHub · Azure Boards · Agile"
          description="Work in short iterations with clearly scoped tasks, code reviews, and branching strategies like feature branches and pull requests."
        />
        <Step
          title="Build & Test"
          tools="Azure DevOps Pipelines · GitHub Actions · xUnit"
          description="Automate builds and test runs for .NET and React projects, catching regression issues early in the pipeline."
        />
        <Step
          title="Package & Deploy"
          tools="Docker · Netlify · Azure"
          description="Containerize backend services, deploy static frontends to Netlify, and use environment‑specific configurations for staging/production."
        />
        <Step
          title="Monitor & Improve"
          tools="Dashboards · Logs · Metrics"
          description="Track performance, latency, and error rates; iterate on schema tuning, indexing, and infrastructure as needed."
        />
      </div>

      <div className="pipeline-note">
        <p>
          <strong>This portfolio itself</strong> is designed to be deployed via Git + GitHub Actions + Netlify,
          demonstrating my experience with cloud‑native, automated delivery workflows.
        </p>
      </div>
    </div>
  )
}
