// Botão mobile
const btnMobile = document.getElementById("mobile_btn");

function toggleMenu() {
  const nav = document.getElementById("navbar");
  nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);

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
    // const body = accordion.querySelector(".accordion_body");
    // body.classList.toggle("active");
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
