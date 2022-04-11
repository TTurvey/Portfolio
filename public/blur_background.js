const heroSection = document.querySelector('.hero_section');
const checkBox = document.getElementById("hamburger_checkbox")

checkBox.addEventListener('click', event => {
	if(event.target.checked) {
    heroSection.style["filter"]="blur(3px)";
	} else {
    heroSection.style["filter"]="blur(0px)";
  }
});
