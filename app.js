const textBlock = document.getElementById('text-block');
const content = [
  // Text messages
  {
    type: 'text',
    content: "As dori sa incep prin a-ti reamintii cat de mult insemni pentru mine multumindu-ti pentru fiecare clipa pe care mi-ai oferit-o de-a lungul acestor 3 ani de cand ai ales sa nu ma mai tii un secret fata de familia ta ; )"
  },
  {
    type: 'text', 
    content: "Ma tot gandesc la cum, daca mi-as fi permis sa continui sa cred ca nu te merit, as fi fost mult mai sarac din toate punctele de vedere. Ma gandesc la cum m-as fi jefuit de toate momentele pe care acum le gasesc definitorii existentei mele si viitorului pe care il avem acum."
  },
  {
    type: 'text', 
    content: "Stiu ca ai verbalizat de mai multe ori ca pentru tine nu e suficienta simpla prezenta si ai nevoie de reasigurari ale sentimentelor mele si prin alte mijloace dar pentru mine, pur si simplu tu fiind acolo ma incarca cum nu o mai face altceva."
  },
  {
    type: 'text', 
    content: "In toata complexitatea cu care ma vezi gasesc cea mai veritabila fericire cand sunt cu tine. Iubesc simplul fapt ca te pot vedea, ca te pot tine in brate, ca te simt in pat cand ne culcam, ca impartim mesele si ca poti sa te simti suficient de confortabila in jurul meu incat sa faci si sa zici tot ce vrei. Ma implineste sa te vad fericita mai mult decat as fi putut crede ca ar fi posibil. Ador sa cresc alaturi de tine si sper ca in curand sa pot sa iti spun ce dorinta imi pun de fiecare data."
  },
  {
    type: 'text', 
    content: "Te iubesc, la multi ani noua < 3"
  },

  // Add all your other text messages here with type: 'text'
  
  // Photo with caption (add as many as you want)
  {
    type: 'photo',
    image: 'images/p1.jpg',
    caption: 'Cand te gandesti ca astea au fost primele noastre mesaje'
  },
  {
    type: 'photo',
    image: 'images/photo2.jpg',
    caption: 'Moment special care îmi place să îl revăd'
  }
];

let currentIndex = 0;
let hasStarted = false;

textBlock.classList.add('welcome');

document.body.addEventListener('click', () => {
  if (!hasStarted) {
    hasStarted = true;
    textBlock.classList.remove('welcome');
    textBlock.classList.add('started');
    showContent(content[currentIndex]);
  } else {
    currentIndex = (currentIndex + 1) % content.length;
    showContent(content[currentIndex]);
  }
});

function showContent(item) {
  textBlock.style.opacity = 0;
  
  setTimeout(() => {
    textBlock.innerHTML = '';
    textBlock.style.opacity = 1;
    
    if (item.type === 'text') {
      textBlock.classList.add('text-content');
      textBlock.classList.remove('photo-content');
      
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < item.content.length) {
          textBlock.textContent = item.content.substring(0, i + 1);
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, 30);
    } 
    else if (item.type === 'photo') {
      textBlock.classList.add('photo-content');
      textBlock.classList.remove('text-content');
      textBlock.classList.remove('started');
      
      const img = document.createElement('img');
      img.src = item.image;
      img.className = 'memory-photo';
      
      const caption = document.createElement('div');
      caption.className = 'photo-caption';
      caption.textContent = item.caption;
      
      textBlock.innerHTML = '';
      textBlock.appendChild(img);
      textBlock.appendChild(caption);
    }
  }, 300);
}