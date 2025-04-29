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
    loader.style.pointerEvents = 'none';
    setTimeout(() => loader.remove(), 800);
  }, 1200);

});
