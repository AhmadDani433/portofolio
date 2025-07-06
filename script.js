

const word = { text: "Ahmad Dani", color: "#00bcd4" };
const typingElement = document.querySelector(".typing");

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function typeOnce() {
  const { text, color } = word;
  for (let i = 0; i < text.length; i++) {
    const html = `<span style="color: ${color}">${text.slice(0, i + 1)}</span>`;
    typingElement.innerHTML = html;
    await delay(random(100, 200));
  }
}

typeOnce();

// Scroll Reveal
const reveals = document.querySelectorAll('.reveal');
const scrollReveal = () => {
  for (let el of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 100;
    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  }
};
window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);

// Navbar Scroll Background
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Dark Mode Toggle
const toggleBtn = document.getElementById('toggleMode');
const body = document.body;
if (localStorage.getItem("mode") === "light") {
  body.classList.add("light");
  toggleBtn.textContent = "☀";
}
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light");
  const isLight = body.classList.contains("light");
  toggleBtn.textContent = isLight ? "☀" : "🌙";
  localStorage.setItem("mode", isLight ? "light" : "dark");
});

// Responsive Nav Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
