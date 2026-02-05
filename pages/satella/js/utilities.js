import "https://cdn.jsdelivr.net/npm/particlesjs@2.2.3/dist/particles.min.js"
import * as particleconfigs from "./particles-config.js"
// almacenar los elementos creados
const elements = new Map();
let currentLine = 0;
let isTransitioning = false;
  let showBioOrSocial = 1;
  
export function createElement({ tag = "div", container = null, name, ...props }) {
  const el = document.createElement(tag);

  for (const [key, value] of Object.entries(props)) {

    // guard 0: event listeners (onClick, onInput, onChange...)
    if (key.startsWith("on") && typeof value === "function") {
      const event = key.slice(2).toLowerCase();
      el.addEventListener(event, value);
      continue;
    }

    // guard 1: style como objeto
    if (key === "style" && typeof value === "object") {
      Object.assign(el.style, value);
      continue;
    }

    // guard 2: propiedad directa del elemento
    if (key in el) {
      el[key] = value;
      continue;
    }

    // guard 3: atributo HTML
    el.setAttribute(key, value);
  }

  if (name) {
    elements.set(name, el);
  }

  if (container instanceof HTMLElement) {
    container.appendChild(el);
  }

  return el;
}
export function createParticles({ container, config, name }) {


  const particlesContainer = createElement({ id: name, className: name });
  container.appendChild(particlesContainer);
  particlesJS(name, particleconfigs[config]);
}

export function enterSite() {
  const overlay = elements.get("overlay");
  const credits = document.querySelector(".credits");
  const arrow=document.getElementById("arrow");
  startVideo()
  //Animations
  
  overlay.className = `${overlay.className} fade-out fade-to-the-right`;
  
  
  // Wait for the fade to finish (0.5 seconds) and then hide the overlay
  setTimeout(function () {
    overlay.style.display = "none";
    credits.style.display = "none";
    setTextRotation();
    changeElements();
  }, 500); // Matches the duration of the transition, in milliseconds

}
function startVideo(){
  const video = document.querySelector(".background-video");
  
  const audio = document.querySelector(".musicplayer");
  if (video) video.play();
  if (audio) {
    const defaultVolume=  navigator.maxTouchPoints > 0 ? 1 : .4;
    audio.volume = defaultVolume; // Set the volume to 0.4, all my friend say it's too loud and they will be deaf
    audio.play();
  }
 arrow.addEventListener("click",changeElements);
}


export function controlAudio() {
  const audio = document.getElementById("background-audio");
  const volumeSlider = document.getElementById("custom-volume-slider-satella");

  volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value / 100;
  });

  audio.addEventListener("volumechange", () => {
    volumeSlider.value = audio.volume * 100;
  });
}

export function setTextRotation() {

  const textLines = Array.from(document.querySelectorAll(".añadir-texto")).map(
    (element) => element.innerText
  );
  const textElement = document.createElement("p");
  const imageAndTextContainer = document.querySelector(".username");
  changeLine({ textElement, imageAndTextContainer });
  console.log("entering");



  function changeLine({ textElement, imageAndTextContainer }) {

    textElement.innerHTML = textLines[currentLine];
    textElement.classList.add("typewriter-text");

    if (imageAndTextContainer) {
      imageAndTextContainer.appendChild(textElement);
    }
  }


  setInterval(function () {

    if (imageAndTextContainer && textElement) {
      // Remove the current text element
      imageAndTextContainer.removeChild(textElement);

      // Increment the current line index
      currentLine = (currentLine + 1) % textLines.length;

      // Call changeLine again to display the next line
      changeLine({ textElement, imageAndTextContainer });
    }
  }, 10000); // 10 seconds to match with animation

}


 function changeElements () {
    if (isTransitioning) return; 

    const socials = document.querySelector(".socials");
    const bio = document.querySelector(".flex-body-bio");
    isTransitioning = true;

    if (showBioOrSocial === 0) {
      socials.style.display = "block";
      socials.classList.remove("fade-to-the-left");
      socials.classList.add("fade-from-the-right");
      bio.classList.add("fade-to-the-left");
      bio.classList.remove("fade-from-the-right");
      setTimeout(() => {
        bio.style.display = "none";
        isTransitioning = false; 
      }, 1000); 
      showBioOrSocial = 1;
    } else {
      bio.style.display = "flex";
      socials.classList.add("fade-to-the-left");
      socials.classList.remove("fade-from-the-right");
      bio.classList.remove("fade-to-the-left");
      bio.classList.add("fade-from-the-right");
      setTimeout(() => {
        socials.style.display = "none";
        isTransitioning = false; 
      }, 1000); 
      showBioOrSocial = 0;
    }
  };
  