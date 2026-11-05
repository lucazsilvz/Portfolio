// Elementos do DOM
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const year = document.getElementById("year");

// Alternar menu mobile com acessibilidade (aria-expanded)
if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    const isActive = navLinks.classList.toggle("active");
    menuBtn.setAttribute("aria-expanded", String(isActive));
  });

  // Fechar menu ao clicar em qualquer link da navegação
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });

  // Fechar menu ao pressionar a tecla Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.focus();
    }
  });
}

// Ano automático no rodapé
if (year) {
  year.textContent = ` • ${new Date().getFullYear()}`;
}
