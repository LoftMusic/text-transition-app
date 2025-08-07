const textBlock = document.getElementById('text-block');
const texts = [
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Life is what happens when you're busy making other plans. – John Lennon",
  "Stay hungry, stay foolish. – Steve Jobs",
  "Your time is limited, don’t waste it living someone else’s life. – Steve Jobs",
  "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt"
];

let currentIndex = 0;

// Update text on tap
document.body.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % texts.length; // Cycle through texts
  textBlock.textContent = texts[currentIndex];
  
  // Optional: Add animation
  textBlock.style.animation = 'none';
  setTimeout(() => {
    textBlock.style.animation = 'fadeIn 0.5s';
  }, 10);
});