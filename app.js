const textBlock = document.getElementById('text-block');
const texts = [
  "Hello! The tap hint is now removed.",
  "You can still tap anywhere\non the screen to continue.",
  "The text will transition\nsmoothly between messages.",
  "The cursor tracks perfectly\nacross multiple lines.",
  "Clean and simple interface!"
];

let currentIndex = 0;

// Initialize
showText(texts[currentIndex]);

// Handle tap/click
document.body.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % texts.length;
  showText(texts[currentIndex]);
});

function showText(text) {
  // Fade out
  textBlock.classList.remove('visible');
  
  setTimeout(() => {
    // Reset and prepare for typing
    textBlock.textContent = '';
    textBlock.classList.add('visible');
    
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        textBlock.textContent = text.substring(0, i + 1);
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);
  }, 500);
}