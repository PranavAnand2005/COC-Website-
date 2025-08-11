'use strict';



const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

navbarToggler.addEventListener("click",function(){
    navbar.classList.toggle("active");
    this.classList.toggle("active")
})

for(let i = 0; i< navbarLinks.length;i++){
    navbarLinks[i].addEventListener("click",function(){
        navbar.classList.remove("active");
        navbarToggler.classList.remove("active");
    });
}

// muscic player

const music = document.getElementById("bgMusic");
const disk = document.getElementById("diskIcon");

let isPlaying = false;

document.getElementById("musicPlayer").addEventListener("click", () => {
  if (!isPlaying) {
    music.play();
    disk.classList.add("playing");
    isPlaying = true;
  } else {
    music.pause();
    disk.classList.remove("playing");
    isPlaying = false;
  }
});

// button suond effects
// Ensure audio elements are loaded only once

// Get audio elements (declare only once)
const hoverSound = document.getElementById("hoverSound");
const clickSound = document.getElementById("clickSound");

// Apply sounds to navbar links only
document.querySelectorAll("nav a").forEach(link => {
    
    // Play hover sound
    link.addEventListener("mouseenter", () => {
        hoverSound.currentTime = 0;
        hoverSound.play();
    });

    // Play click sound BEFORE navigation
    link.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent instant navigation
        clickSound.currentTime = 0;
        clickSound.play();

        // Navigate after sound finishes
        setTimeout(() => {
            window.location.href = link.href;
        }, 150); // Adjust delay for your click sound length
    });
});

// emblame effect

document.addEventListener("scroll", function() {
    const logo = document.querySelector(".supercell-logo");
    const emblem = document.querySelector(".emblem-image");

    const rectLogo = logo.getBoundingClientRect();
    const rectEmblem = emblem.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Fade in logo
    if (rectLogo.top < windowHeight / 1.2 && rectLogo.bottom > 0) {
        logo.classList.add("visible");
    } else {
        logo.classList.remove("visible");
    }

    // Scale and fade in emblem
    if (rectEmblem.top < windowHeight / 1.5 && rectEmblem.bottom > windowHeight / 3) {
        emblem.classList.add("scaled");
    } else {
        emblem.classList.remove("scaled");
    }
});



