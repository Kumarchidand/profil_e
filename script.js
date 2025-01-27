const download1=document.getElementById('download1');
const download2=document.getElementById('download2');
const btn=document.getElementById('btn3');
btn.addEventListener('click',()=>{
  window.open('./kumarN25.pdf');
});
document.querySelector('#scrollpart').addEventListener('click', () => {
  const sections = Array.from(document.querySelectorAll('section'));
  const currentScroll = window.scrollY;
  let nextSection = null;

  for (let i = 0; i < sections.length - 1; i++) {
    const sectionTop = sections[i].offsetTop;
    if (sectionTop > currentScroll) {
      nextSection = sections[i];
      break;
    }
  }

  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' });
  }
});

  document.querySelector("#github").addEventListener('click',()=>{
    window.location.href = 'https://github.com/Kumarchidand';
  });
  document.querySelector("#insta").addEventListener('click',()=>{
window.location.href = "https://www.instagram.com/kumarchidanandam/?next=%2F"
  });
  document.querySelector("#linkdin").addEventListener('click',()=>{
    window.location.href="https://www.linkedin.com/in/kumar-chidanandam-79a043225/"
  });
  document.querySelector("#mail").addEventListener('click', () => {
    window.location.href = "mailto:kchidanandam000@gmail.com";
});

download1.addEventListener('click',()=>{
  window.open('./kumarN25.pdf');
})
download2.addEventListener('click',()=>{
  window.open('./kumarN25.pdf');
})
const text = ["Frontend Developer", "Backend Developer", "Full Stack Developer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === text.length) {
    count = 0;
  }
  currentText = text[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".text-animation").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 200);
})();
