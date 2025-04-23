// Form submission alert
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thanks for your message! I'll get back to you soon.");
    this.reset();
  });
  
  // Section reveal on scroll
  const sections = document.querySelectorAll("section");
  
  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
  
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
  
      if (sectionTop < triggerBottom) {
        section.style.animationDelay = "0s";
        section.classList.add("show");
      }
    });
  };
  
  revealOnScroll();
  window.addEventListener('scroll', revealOnScroll);
  
  // Dark Mode Toggle
  const toggle = document.getElementById('dark-mode-toggle');
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
  