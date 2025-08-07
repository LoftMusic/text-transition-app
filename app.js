const contentBlock = document.getElementById('content-block');
const content = [
  // Text messages
  {
    type: 'text',
    content: "Aș dori să încep prin a-ți reaminti cât de mult însemni pentru mine, mulțumindu-ți pentru fiecare clipă pe care mi-ai oferit-o de-a lungul acestor 3 ani de când ai ales să nu mă mai ții un secret față de familia ta ;)"
  },
  {
    type: 'text',
    content: "Mă tot gândesc la cum, dacă mi-aș fi permis să continui să cred că nu te merit, aș fi fost mult mai sărac din toate punctele de vedere. Mă gândesc la cum m-aș fi jefuit de toate momentele pe care acum le găsesc definitorii existenței mele și viitorului pe care îl avem acum."
  },
  {
    type: 'text',
    content: "Știu că ai verbalizat de mai multe ori că pentru tine nu e suficientă simpla prezență și ai nevoie de reasigurări ale sentimentelor mele și prin alte mijloace, dar pentru mine, pur și simplu tu fiind acolo mă încarcă cum nu o mai face altceva."
  },
  {
    type: 'text',
    content: "În toată complexitatea cu care mă vezi, găsesc cea mai veritabilă fericire când sunt cu tine. Iubesc simplul fapt că te pot vedea, că te pot ține în brațe, că te simt în pat când ne culcăm, că împărțim mesele și că poți să te simți suficient de confortabilă în jurul meu încât să faci și să zici tot ce vrei. Mă împlinește să te văd fericită mai mult decât aș fi putut crede că ar fi posibil. Ador să cresc alături de tine și sper că în curând să pot să îți spun ce dorință îmi pun de fiecare dată."
  },
  {
    type: 'text',
    content: "Te iubesc, la mulți ani nouă <3 !"
  },
  // Photos with captions
  {
    type: 'photo',
    image: 'images/photo1.jpg',
    caption: 'Amintire frumoasă împreună <3'
  },
  {
    type: 'photo',
    image: 'images/photo2.jpg',
    caption: 'Moment special care îmi place să îl revăd'
  }
];

let currentIndex = 0;
let hasStarted = false;

contentBlock.classList.add('welcome');

document.body.addEventListener('click', () => {
  if (!hasStarted) {
    hasStarted = true;
    contentBlock.classList.remove('welcome');
    showContent(content[currentIndex]);
  } else {
    currentIndex = (currentIndex + 1) % content.length;
    showContent(content[currentIndex]);
  }
});

function showContent(item) {
  contentBlock.style.opacity = 0;
  
  setTimeout(() => {
    contentBlock.innerHTML = '';
    contentBlock.className = '';
    contentBlock.style.opacity = 1;
    
    if (item.type === 'text') {
      contentBlock.classList.add('text-content');
      
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < item.content.length) {
          contentBlock.textContent = item.content.substring(0, i + 1);
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, 30);
    } 
    else if (item.type === 'photo') {
      contentBlock.classList.add('photo-content');
      
      const img = new Image();
      img.src = item.image;
      img.className = 'memory-photo';
      img.onload = function() {
        if (this.naturalHeight > this.naturalWidth) {
          img.classList.add('portrait-image');
        }
      };
      
      const caption = document.createElement('div');
      caption.className = 'photo-caption';
      caption.textContent = item.caption;
      
      contentBlock.appendChild(img);
      contentBlock.appendChild(caption);
    }
  }, 300);
}