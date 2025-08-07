const textBlock = document.getElementById('text-block');
const texts = [
  "As dori sa incep prin a-ti reamintii cat de mult insemni pentru mine multumindu-ti pentru fiecare clipa pe care mi-ai oferit-o de-a lungul acestor 3 ani de cand ai ales sa nu ma mai tii un secret fata de familia ta ; )",
  "Ma tot gandesc la cum, daca mi-as fi permis sa continui sa cred ca nu te merit, as fi fost mult mai sarac din toate punctele de vedere. Ma gandesc la cum m-as fi jefuit de toate momentele pe care acum le gasesc definitorii existentei mele si viitorului pe care il avem acum.",
  "Stiu ca ai verbalizat de mai multe ori ca pentru tine nu e suficienta simpla prezenta si ai nevoie de reasigurari ale sentimentelor mele si prin alte mijloace dar pentru mine, pur si simplu tu fiind acolo ma incarca cum nu o mai face altceva.",
  "In toata complexitatea cu care ma vezi gasesc cea mai veritabila fericire cand sunt cu tine. Iubesc simplul fapt ca te pot vedea, ca te pot tine in brate, ca te simt in pat cand ne culcam, ca impartim mesele si ca poti sa te simti suficient de confortabila in jurul meu incat sa faci si sa zici tot ce vrei. Ma implineste sa te vad fericita mai mult decat as fi putut crede ca ar fi posibil. Ador sa cresc alaturi de tine si sper ca in curand sa pot sa iti spun ce dorinta imi pun de fiecare data.",
  "Te iubesc, la multi ani noua < 3 !"
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