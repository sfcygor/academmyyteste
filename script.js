document.addEventListener("DOMContentLoaded", function () {
  const menuHamburguer = document.querySelector(".menu-hamburguer");
  const navLinks = document.querySelector(".nav-links");

  menuHamburguer.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menuHamburguer.querySelector("i");
    if (icon.classList.contains("fa-bars")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        const icon = menuHamburguer.querySelector("i");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });
  });

  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
    } else {
      navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  function typeEffect(element, text, speed) {
    let i = 0;

    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }

    type();
  }

  const heroTitle = document.getElementById("hero-title");

  const textToType = "Sites Profissionais que Impulsionam o seu Negócio";

  const typingSpeed = 70;

  if (heroTitle) {
    typeEffect(heroTitle, textToType, typingSpeed);
  }
});
