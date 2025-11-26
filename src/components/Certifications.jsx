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
              src="/cert1-placeholder.txt"
              alt="Certification 1 placeholder"
            />
            <span>Upload certificate image 1</span>
          </div>
          <div className="certs-gallery__item">
            <img
              src="/cert2-placeholder.txt"
              alt="Certification 2 placeholder"
            />
            <span>Upload certificate image 2</span>
          </div>
        </aside>
      </div>
    </div>
  )
}
