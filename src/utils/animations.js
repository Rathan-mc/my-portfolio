// Intersection Observer for scroll animations
export const observeElements = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          entry.target.classList.add('animate-in');
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  // Observe all cards and sections
  const elements = document.querySelectorAll('.card, .timeline-card, .project-card, .pipeline-step, .cert-item');
  elements.forEach((el) => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });
};

// Typing animation for hero title
export const typeWriter = (element, text, speed = 100) => {
  let i = 0;
  element.innerHTML = '';
  
  const timer = setInterval(() => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
};

// Parallax effect for hero section
export const parallaxEffect = () => {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
      hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  });
};

// Smooth reveal animation
export const revealOnScroll = () => {
  const reveals = document.querySelectorAll('.section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  });

  reveals.forEach((reveal) => {
    reveal.style.opacity = '0';
    reveal.style.transform = 'translateY(50px)';
    reveal.style.transition = 'all 0.6s ease-out';
    observer.observe(reveal);
  });
};