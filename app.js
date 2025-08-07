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
  // Fade out
  textBlock.classList.remove('visible');
  
  setTimeout(() => {
    // Reset and start typing animation
    textBlock.innerHTML = '';
    textBlock.classList.add('typing');
    textBlock.classList.add('visible');
    
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        textBlock.innerHTML += text.charAt(i);
        i++;
      } else {
        clearInterval(typingInterval);
        textBlock.classList.remove('typing');
      }
    }, 50); // Adjust typing speed (milliseconds)
  }, 500); // Matches CSS transition time
}