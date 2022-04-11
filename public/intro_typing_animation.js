const typedTextSpan = document.querySelector("#typed_text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ['an ex-accountant 💻', 'an autodidact 📚', 'a film fan 🎥', 'a music lover 🔊', 'an explorer 🗺️','an optimist 🥛', 'a crossfitter 🏋️‍♂️', 'a drummer 🥁', 'a skier ⛷️', 'an ex-auditor 🔎'];
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