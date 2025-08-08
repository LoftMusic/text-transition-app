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
    content: "Sper să folosești aplicația asta de, sper, puținele dăți în care nu vom fi unul lângă altul. Te iubesc, la mulți ani nouă <3 !"
  },
  {
    type: 'text',
    content: " SI ACUM CATEVA AMINTIRI : "
  },
  // Photos with captions
  {
    type: 'photo',
    image: 'images/p1.jpg',
    caption: 'Cand te gandesti ca astea au fost primele mesaje'
  },
  {
    type: 'photo',
    image: 'images/p2.jpg',
    caption: 'Imagineaza-ti ca pur si simplu asa de amabil eram, nici nu incercam sa obtin ceva'
  },
  {
    type: 'photo',
    image: 'images/p3.jpg',
    caption: 'Incepeam sa facem muzica aici : P'
  }
  ,
  {
    type: 'photo',
    image: 'images/p4.jpg',
    caption: 'Wtf was i on'
  }
  ,{
    type: 'photo',
    image: 'images/p5.jpg',
    caption: 'Te trezeam dimineata si iti aduceam si cirese < 3'
  }
  ,{
    type: 'photo',
    image: 'images/p6.jpg',
    caption: 'Aici imi dadeai cu flit bombastic...'
  }
  ,{
    type: 'photo',
    image: 'images/p7.jpg',
    caption: 'LOOKING OUT FOR U WHEN WE WERE NOT TOGETHER BIIIIIITCH'
  }
  ,{
    type: 'photo',
    image: 'images/p8.jpg',
    caption: 'Alta instanta mizera in care mi-ai tras clapa… Acum ca stau sa le pun una dupa alta parca sunt putin cam multe'
  }
  ,{
    type: 'photo',
    image: 'images/p9.jpg',
    caption: 'Content ✨'
  }
  ,{
    type: 'photo',
    image: 'images/p10.jpg',
    caption: 'CE MAMA MEA VORBEAI ASA CU MINE'
  }
  ,{
    type: 'photo',
    image: 'images/p11.jpg',
    caption: 'Suferei de surzimea de dimineata acuta de ceva timp'
  }
  ,{
    type: 'photo',
    image: 'images/p12.jpg',
    caption: 'C E  Z E I T A'
  }
  ,{
    type: 'photo',
    image: 'images/p13.jpg',
    caption: 'Fiecare cu ce-l doare'
  },
  {
    type: 'photo',
    image: 'images/p14.jpg',
    caption: 'Great meme'
  },
  {
    type: 'photo',
    image: 'images/p15.jpg',
    caption: 'ALPROVIZIONAM DE PE ATUNCI , GET IT ????????????????);£:£,£;&/-@'
  },
  {
    type: 'photo',
    image: 'images/p16.jpg',
    caption: 'Fuck Gaylo'
  },
  {
    type: 'photo',
    image: 'images/p17.jpg',
    caption: '?????'
  },
  {
    type: 'photo',
    image: 'images/p18.jpg',
    caption: 'Acum 3 ani pe vremea asta pt 1'
  },
  {
    type: 'photo',
    image: 'images/p19.jpg',
    caption: 'Pt 2… wtf'
  },
  {
    type: 'photo',
    image: 'images/p20.jpg',
    caption: 'Primele te iubesc scrise pt 1 hihi'
  },
  {
    type: 'photo',
    image: 'images/p21.jpg',
    caption: 'Primele te iubesc scrise pt 2'
  },
  {
    type: 'text',
    content: "Din câte văd, până acum ne-am scris te iubesc de peste 500 de ori de când am început să fim împreună. Îmi doresc să mai ajungem să ne spunem asta de încă 500 de ori... iar apoi, încă o dată tot atât."
  },
  {
    type: 'text',
    content: " ∞ Te ador cu toată sinceritatea și ființa mea. Încă o dată, La mulți ani! Te iubesc! < 3 ∞  "
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