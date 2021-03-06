const typedTextSpan = document.querySelector("#typed_text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ['an ex-accountant π»', 'an autodidact π', 'a film fan π₯', 'a music lover π', 'an explorer πΊοΈ','an optimist π₯', 'a crossfitter ποΈββοΈ', 'a drummer π₯', 'a skier β·οΈ', 'an ex-auditor π'];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 4000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")){
      cursorSpan.classList.add("typing")
    };
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) {
      cursorSpan.classList.add("typing")
    };
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});