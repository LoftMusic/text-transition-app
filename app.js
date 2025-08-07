const textBlock = document.getElementById('text-block');
const texts = [
  "Hello! Tap to see the next message.",
  "Did you know? The average person taps their phone 2,617 times a day.",
  "This text appears with a typing animation!",
  "You can customize these messages however you like.",
  "Try adding your own quotes or jokes!"
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
  textBlock.classList.remove('visible');
  
  setTimeout(() => {
    textBlock.innerHTML = ''; // Clear previous text
    textBlock.classList.add('visible');
    
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        // Render all typed characters
        textBlock.innerHTML = text.substring(0, i + 1) + 
          '<span class="typing-cursor">|</span>';
        i++;
      } else {
        clearInterval(typingInterval);
        textBlock.innerHTML = text; // Remove cursor when done
      }
    }, 50);
  }, 500);
}