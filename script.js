
  // Navigation-------------------------------- 
const nav=document.getElementById('nav');
const menuIcon= document.querySelector('.menu-icon');

function toggleMenu() {
  nav.classList.toggle('active');
  menuIcon.classList.toggle('active');
}

function hideMenu() {
  nav.classList.remove('active');
  menuIcon.classList.remove('active');
}


// Slideshow -------------------
let currentImageIndex = 0;
const images = document.querySelectorAll('.slideshow img');

function switchImage() {
  images[currentImageIndex].classList.remove('active');
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].classList.add('active');
}

setInterval(switchImage, 5000);

// Banner ---------------------
const bannerContent =document.getElementById('bannerContent');
let messageHTML='<span class="contact-message">Contact me at fatimashams.0@gmail.com - I\'m here to help!</span>';
let repeatedMessage=messageHTML.repeat(10);

// Set the reapeated Messages as the content 
bannerContent.innerHTML = repeatedMessage + repeatedMessage;


// Houdini Worklet 
CSS.paintWorklet.addModule('https://unpkg.com/css-houdini-voronoi@1.1.5/dist/worklet.js');


