// Плавный скролл
document.getElementById("scrollBtn").addEventListener("click", () => {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

// Слова підтримки
const messages = [
  "Ти не слабка — ти жива.",
  "Твої почуття мають значення.",
  "Ти робиш достатньо.",
  "Навіть маленькі кроки — це прогрес.",
  "Ти заслуговуєш на турботу."
];

const textEl = document.getElementById("supportText");
const btn = document.getElementById("supportBtn");

btn.addEventListener("click", () => {
  const i = Math.floor(Math.random() * messages.length);
  textEl.textContent = messages[i];
});
