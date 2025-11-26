import React from 'react'

export function Contact() {
  return (
    <div className="section__inner container">
      <header className="section__header">
        <h2>Contact</h2>
        <p>
          Have a role, project, or idea where a full‑stack developer with DevOps experience can help?
          Let&apos;s talk.
        </p>
      </header>

      <div className="contact-layout">
        <div className="card">
          <h3>Direct Contact</h3>
          <ul className="contact-list">
            <li>
              <strong>Phone:</strong> <a href="tel:+919008630039">+91 90086 30039</a>
            </li>
            <li>
              <strong>Email:</strong>{' '}
              <a href="mailto:rathanbabu2307@gmail.com">rathanbabu2307@gmail.com</a>
            </li>
            <li>
              <strong>LinkedIn:</strong>{' '}
              <a
                href="https://linkedin.com/in/rathan-m-c"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/rathan-m-c
              </a>
            </li>
          </ul>
          <p className="contact-note">
            I&apos;m actively interested in full‑stack and DevOps‑focused roles where I can own features
            end‑to‑end — from API design to deployment automation.
          </p>
        </div>

        <form
          className="card contact-form"
          action="https://formspree.io/f/mrbwzdjj"
          method="POST"
        >
          <h3>Send a Message</h3>
          <label>
            Name
            <input type="text" name="name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" required />
          </label>
          <label>
            Subject
            <input type="text" name="subject" placeholder="Hiring, project, collaboration..." />
          </label>
          <label>
            Message
            <textarea name="message" rows="4" required />
          </label>
          <button type="submit" className="btn btn--primary">Submit</button>
        </form>
      </div>
    </div>
  )
}
