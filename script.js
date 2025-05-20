// Smooth scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const section = document.querySelector(this.getAttribute('href'));
      section.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Typewriter effect
  const text = "Hi, I'm Yash Kini — future tech leader and creator 🌟";
  let index = 0;
  const typeTarget = document.querySelector('.typewriter');
  
  function typeWriter() {
    if (index < text.length) {
      typeTarget.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 50);
    }
  }
  typeWriter();
  
  // Dark mode toggle
  const toggle = document.getElementById('darkModeToggle');
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
  
  // Reveal on scroll
  function revealOnScroll() {
    document.querySelectorAll('.reveal').forEach(el => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const elementVisible = 100;
  
      if (elementTop < windowHeight - elementVisible) {
        el.classList.add("active");
      }
    });
  }
  window.addEventListener('scroll', revealOnScroll);
  
  