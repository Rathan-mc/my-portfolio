import React, { useState, useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Certifications } from './components/Certifications'
import { Profile } from './components/Profile'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { observeElements, revealOnScroll, cursorTrail, magneticButtons, parallaxScroll } from './utils/animations'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'devops', label: 'DevOps' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' }
]

export default function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  useEffect(() => {
    // Initialize animations after component mounts
    const timer = setTimeout(() => {
      observeElements();
      revealOnScroll();
      cursorTrail();
      magneticButtons();
      parallaxScroll();
    }, 100);

    return () => clearTimeout(timer);
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((section) => {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className={`app app--${theme}`}>
      <Navbar
        sections={sections}
        activeSection={activeSection}
        onThemeToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        theme={theme}
      />
      <main>
        <section id="about" className="section">
          <Hero />
        </section>
        <section id="skills" className="section">
          <Skills />
        </section>
        <section id="devops" className="section">
          <Profile />
        </section>
        <section id="experience" className="section">
          <Experience />
        </section>
        <section id="projects" className="section">
          <Projects />
        </section>
        <section id="certifications" className="section">
          <Certifications />
        </section>
        <section id="contact" className="section">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}
