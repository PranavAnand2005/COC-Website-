'use strict';



const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

navbarToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active")
})

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
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

document.addEventListener("scroll", function () {
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

// Character carousel
const characters = [
  {
    title: "The Barbarian King",
    desc: "The Barbarian King will defend the village whenever he's not regenerating health from a previous attack. The Barbarian King only defends his territory around his platform and will retreat if lured too far out. If the village is attacked while he is regenerating health, his altar will be empty. If he locks onto a troop, he will follow that troop until he dies or that troop is killed. Once the troop is killed, and he is outside of his patrol zone, he will return to patrolling around his altar, even if the altar is destroyed. You do not need to knock out the Barbarian King (or any Hero other than the Grand Warden) to three star a base.",
    img: "image/Barbarian_King_2.png"
  },
  {
    title: "The Goblin",
    desc: "Goblins prioritize resource buildings above all other targets, and will bypass all other types of enemy buildings and troops while any resource buildings remain on the battlefield. This is true even if they are under attack by enemy Clan Castle troops, heroes or Skeleton Trap skeletons. Note that like all troops that prioritize resources, Goblins consider the Clan Castle and the Town Hall to be resource buildings regardless of whether or not they contain loot and whether or not the Town Hall's weapon (if any) is activated; Goblins will preferentially target them in addition to causing double damage to them.",
    img: "image/goblin1.png"
  },
  {
    title: "The P.E.K.K.A",
    desc: "P.E.K.K.A's high damage and hitpoints allow her to easily knock out opposing v, especially when paired with Rage Spells, under which she is able to one-shot Grand Wardens, Archer Queens up to level 76, and Royal Champions up to level 10 (Barbarian Kings may take more than two hits). However, if a defending Archer Queen or Royal Champion is attacking from behind a Wall, they can easily do a lot of damage to the P.E.K.K.As while they are stuck behind the Walls, especially if they are high-leveled.",
    img: "image/pekka1.png"
  },
  {
    title: "The Golem",
    desc: "Golems prioritize defensive structures above all other targets, and will bypass all other types of enemy buildings and troops while any defenses remain on the battlefield. This is true even if they are under attack by enemy Clan Castle troops, heroes or Skeleton Trap skeletons. Note that like all troops that prioritize defenses, Golems do not consider the Clan Castle to be a defense regardless of whether or not it contains enemy troops, but do consider the defending Grand Warden and the activated Town Hall weapon (if any) to be defensive buildings.",
    img: "image/golem1.png"
  },
  {
    title: "The Giant",
    desc: "Giants prioritize defensive structures above all other targets, and will bypass all other types of enemy buildings and troops while any defenses remain on the battlefield. This is true even if they are under attack by enemy Clan Castle troops, heroes or Skeleton Trap skeletons. Note that like all troops that prioritize defenses, Giants do not consider the Clan Castle to be a defense regardless of whether or not it contains enemy troops, but do consider the defending Grand Warden and the activated Town Hall weapon (if any) to be defensive buildings.",
    img: "image/gaint1.png"
  },
  {
    title: "The Valkyrie",
    desc: "A master of the two-handed axe, this glorious warrior runs between nearby buildings and can shred several troops or buildings at once with her whirlwind blow!. Valkyries are very effective against tightly packed groups of troops, such as Barbarians, Archers, and Goblins. They can also be used to clear out buildings in the core of a base, especially when paired with Rage Spells. However, they can be distracted by single-target defenses like the Archer Queen or the Grand Warden, so it's important to protect them with other troops or spells.A master of the two-handed axe, this glorious warrior runs between nearby buildings and can shred several troops or buildings at once with her whirlwind blow!",
    img: "image/valkyrie.png"
  },
];

let currentIndex = 0;


const titleEl = document.getElementById('char-title');
const descEl = document.getElementById('char-description');
const imgEl = document.getElementById('char-image');
const thumbs = document.querySelectorAll('.thumb');

function updateCharacter(index) {
  const char = characters[index];
  titleEl.textContent = char.title;
  descEl.textContent = char.desc;
  imgEl.style.opacity = 0;
  setTimeout(() => {
    imgEl.src = char.img;
    imgEl.style.opacity = 1;
  }, 300);

  thumbs.forEach(t => t.classList.remove('active'));
  thumbs[index].classList.add('active');
}

document.getElementById('next-btn').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % characters.length;
  updateCharacter(currentIndex);
});

thumbs.forEach(thumb => {
  thumb.addEventListener('click', () => {
    currentIndex = parseInt(thumb.dataset.index);
    updateCharacter(currentIndex);
  });
});

window.addEventListener('wheel', (e) => {
  if (e.deltaY > 0) {
    currentIndex = (currentIndex + 1) % characters.length;
  } else {
    currentIndex = (currentIndex - 1 + characters.length) % characters.length;
  }
  updateCharacter(currentIndex);
});

//click sound for hero-character section

document.addEventListener("DOMContentLoaded", () => {
  // Load the click sound
  const clickSound = new Audio("music/click.mp3");

  // Elements that should have the click sound
  const clickableElements = document.querySelectorAll(
    "#next-btn, .social-icons button, .thumb"
  );

  // Play sound on click
  clickableElements.forEach(el => {
    el.addEventListener("click", () => {
      clickSound.currentTime = 0; // restart sound if clicked rapidly
      clickSound.play();
    });
  });
});

