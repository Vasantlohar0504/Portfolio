// typing animation

const text = [
"Data Analyst",
"Data Scientist",
"Machine Learning Engineer",
"Python Developer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

if(count === text.length){
count = 0;
}

currentText = text[count];
letter = currentText.slice(0, ++index);

document.getElementById("typing").textContent = letter;

if(letter.length === currentText.length){
count++;
index = 0;
}

setTimeout(type,120);

})();


// particle background

particlesJS("particles-js",{

particles:{
number:{value:80},
size:{value:3},
move:{speed:2},
line_linked:{enable:true}
}

});


// scroll reveal

ScrollReveal().reveal('.card',{delay:200});
ScrollReveal().reveal('.hero',{delay:200});
ScrollReveal().reveal('#about',{delay:200});
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
navMenu.classList.toggle("active");
});