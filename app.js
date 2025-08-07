const textBlock = document.getElementById('text-block');
const texts = [
  "Hello! Tap to see the next message.",
  "This text\nhas multiple\nlines to test",
  "The cursor should\nnow track properly\nacross all lines",
  "No more jumping\nor misalignment\nissues!",
  "Try adding your own\nmulti-line messages!"
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
        // Remove cursor when done
        textBlock.style.setProperty('--show-cursor', '0');
      }
    }, 50);
  }, 500);
}