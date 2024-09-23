document.addEventListener("DOMContentLoaded", function() {
  const navbar = document.querySelector(".nav-bar");
  const content = document.querySelector(".content");
  let isScrolling = false;
  const scrollLimit = 150; // Define o limite para quando a barra voltar à posição original

  window.addEventListener("scroll", function() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > scrollLimit && !isScrolling) {
          navbar.style.position = 'fixed';
          navbar.style.top = '0';
          content.style.marginTop = `${navbar.offsetHeight}px`; // Ajusta a margem do conteúdo
          isScrolling = true;
      } else if (scrollTop <= scrollLimit) {
          navbar.style.position = 'relative';
          content.style.marginTop = ''; // Reseta a margem do conteúdo
          isScrolling = false;
      }
  });
});
