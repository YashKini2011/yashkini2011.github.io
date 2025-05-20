// Dark Mode Toggle
const toggleBtn = document.getElementById('darkModeToggle');
toggleBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
});

// Typewriter Text
const typewriterEl = document.querySelector('.typewriter');
const phrases = ["Aspiring Android Developer", "Tech Enthusiast", "Lifelong Learner"];
let i = 0;

function rotateText() {
  typewriterEl.textContent = phrases[i];
  i = (i + 1) % phrases.length;
  typewriterEl.classList.remove("typewriter");
  void typewriterEl.offsetWidth; // Reset animation
  typewriterEl.classList.add("typewriter");
}
setInterval(rotateText, 5000);
rotateText();

// Reveal on Scroll
const reveals = document.querySelectorAll(".reveal");
function revealSections() {
  for (let section of reveals) {
    const windowHeight = window.innerHeight;
    const revealTop = section.getBoundingClientRect().top;
    if (revealTop < windowHeight - 100) {
      section.classList.add("visible");
    }
  }
}
window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

// Load Achievements from JSON
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const list = document.getElementById("achievementsList");
    data.achievements.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });
  })
  .catch(error => console.error("Error loading JSON:", error));
