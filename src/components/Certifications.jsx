import React from 'react'

const CertItem = ({ title, issuer }) => (
  <li className="cert-item">
    <h3>{title}</h3>
    <p>{issuer}</p>
  </li>
)

export function Certifications() {
  return (
    <div className="section__inner container">
      <header className="section__header">
        <h2>Certifications</h2>
        <p>Continuous learning across DevOps, cloud, and machine learning.</p>
      </header>

      <div className="certs-layout">
        <div>
          <ul className="cert-list">

            {/* 🔥 New Certificate Added at the top */}
            <CertItem
              title="Oracle Cloud Infrastructure 2025 Certified DevOps Professional"
              issuer="Oracle"
            />

            <CertItem
              title="NVIDIA GSI Technology Curriculum"
              issuer="NVIDIA"
            />
            <CertItem
              title="DevOps with AWS"
              issuer="AWS Academy"
            />
            <CertItem
              title="Azure DevOps Projects"
              issuer="Microsoft Learn"
            />
            <CertItem
              title="Machine Learning A–Z (Python & R)"
              issuer="Udemy"
            />
          </ul>
        </div>

        <aside className="certs-gallery">
          <div className="certs-gallery__item">
            <img
              src="/oracle.png"
              alt="Oracle Cloud Infrastructure 2025 Certified DevOps Professional"
            />
            <span>Oracle DevOps Professional</span>
          </div>
          <div className="certs-gallery__item">
            <img
              src="/NVIDIA.png"
              alt="NVIDIA GSI Technology Curriculum"
            />
            <span>NVIDIA GSI Technology</span>
          </div>
        </aside>
      </div>
    </div>
  )
}
