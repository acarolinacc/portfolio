document.addEventListener('DOMContentLoaded', () => {


  // Dark/Light Mode Toggle
  const toggleButton = document.getElementById('theme-toggle');
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    toggleButton.textContent = document.body.classList.contains('light-mode') ? '🌙' : '☀️';
  });

  // Scroll Progress Bar
  const progressBar = document.querySelector('.progress-bar');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (scrollY / docHeight) * 100;
    progressBar.style.width = `${progress}%`;
  });
  // Loader animation
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.style.opacity = '0';
    loader.style.backdropFilter = 'blur(0px)';
    loader.style.pointerEvents = 'none';
    setTimeout(() => loader.remove(), 1000);
  }, 3000); // mostra por ~3 segundos

  // Animação dos círculos sempre que a secção Skills entra no ecrã
  function animateSkills() {
    const skillsSection = document.getElementById('skills');
    const sectionTop = skillsSection.getBoundingClientRect().top;
    const sectionBottom = skillsSection.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    // Só anima se alguma parte da secção estiver visível
    if (sectionTop < windowHeight && sectionBottom > 0) {
      document.querySelectorAll('.circle-skill').forEach(skill => {
        const percent = parseInt(skill.getAttribute('data-percent'), 10);
        const path = skill.querySelector('.circle');

        // Reset para reiniciar a animação
        path.style.transition = 'none';
        path.style.strokeDashoffset = 100;
        
        // Forçar reflow (para aplicar a animação novamente)
        void path.offsetWidth;

        // Aplicar nova animação
        path.style.transition = 'stroke-dashoffset 1.4s ease-out';
        path.style.strokeDashoffset = 100 - percent;
      });
    }
  }

  window.addEventListener('scroll', animateSkills);


});
