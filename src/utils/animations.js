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

// Cursor trail effect
export const cursorTrail = () => {
  let mouseX = 0;
  let mouseY = 0;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = mouseX + 'px';
    trail.style.top = mouseY + 'px';
    
    document.body.appendChild(trail);
    
    setTimeout(() => {
      trail.remove();
    }, 800);
  });
};

// Magnetic button effect
export const magneticButtons = () => {
  const buttons = document.querySelectorAll('.btn, .card, .skill-badge');
  
  buttons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`;
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translate(0px, 0px) scale(1)';
    });
  });
};

// Parallax scrolling effect
export const parallaxScroll = () => {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero, .section');
    
    parallaxElements.forEach((element, index) => {
      const speed = (index + 1) * 0.1;
      element.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });
};