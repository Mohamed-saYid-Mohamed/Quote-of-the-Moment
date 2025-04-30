const quotes = [
  "Success is not final, failure is not fatal.",
  "Believe you can and you're halfway there.",
  "The only way to do great work is to love what you do.",
  "Don't watch the clock; do what it does. Keep going.",
  "You are never too old to set another goal or to dream a new dream." ,
   "The future belongs to those who believe in the beauty of their dreams.",
   "Nin  20 buuxsamy iyo aduun way lagdamayaan",
];

function generateQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerText = quote;
}
