// Botão mobile
const btnMobile = document.getElementById("mobile_btn");

function toggleMenu() {
  const nav = document.getElementById("navbar");
  const bg = document.getElementById("nav");
  nav.classList.toggle("active");
  if (window.scrollY < 50) {
    bg.classList.toggle("scrolled");
  }
}

function closeMobile() {
  const nav = document.getElementById("navbar");
  nav.classList.remove("active");
}

btnMobile.addEventListener("click", toggleMenu);
document
  .querySelectorAll(".nav_item")
  .forEach((item) => item.addEventListener("click", closeMobile));

// Dúvidas
const faq = document.querySelectorAll(".faq_question button");

function activeFaq(event) {
  const question = event.currentTarget;
  const controls = question.getAttribute("aria-controls");
  const response = document.getElementById(controls);

  response.classList.toggle("active");
  const active = response.classList.contains("active");
  question.setAttribute("aria-expanded", active);
}

function faqEvent(faq) {
  faq.addEventListener("click", activeFaq);
}

faq.forEach(faqEvent);

const accordions = document.querySelectorAll(".accordion_item");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    accordion.classList.toggle("active");
  });
});

const nav = document.getElementById("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Scroll animations
const animObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        animObs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1 },
);
document
  .querySelectorAll(".fade-up, .fade-left, .fade-right")
  .forEach((el) => animObs.observe(el));

// Animated counters
function animateCounter(el, target, duration) {
  const start = performance.now();
  const update = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target;
  };
  requestAnimationFrame(update);
}
const counterObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        const el = e.target;
        animateCounter(el, parseInt(el.dataset.target, 10), 1600);
        counterObs.unobserve(el);
      }
    });
  },
  { threshold: 0.5 },
);
document.querySelectorAll(".count").forEach((el) => counterObs.observe(el));

// Scroll
const linksInternos = document.querySelectorAll("");
