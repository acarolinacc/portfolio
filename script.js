document.addEventListener('DOMContentLoaded', () => {
  // Swiper Carousel
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: { el: '.swiper-pagination', clickable: true },
    breakpoints: {
      768: { slidesPerView: 1.2 },
      1024: { slidesPerView: 2.5 }
    }
  });

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

  document.querySelectorAll('.circle-skill').forEach(skill => {
    const percent = parseInt(skill.getAttribute('data-percent'), 10);
    const path = skill.querySelector('.circle');
  
    const offset = 100 - percent;
    path.style.transition = 'stroke-dashoffset 1.4s ease-out';
    path.style.strokeDashoffset = offset;
  });
  


});
