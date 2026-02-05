import { createElement,createParticles,enterSite,controlAudio,setTextRotation } from "./utilities_satella.js";
function init(){
    const overlay = createElement({className:"click-to-enter",name:'overlay', onClick: enterSite}); // Add the class 'click-to-enter' and make whole overlay clickable
    const textElement = createElement({tag:"p",container:overlay,className:"click-text",textContent:"click to enter"}); // Use a <p> for the text
    document.body.appendChild(overlay);
    createParticles({container:overlay,config:"config2",name:"particles-js"});
    const usernameElement = document.querySelector(".username")
    createParticles({container:usernameElement,config:"config1",name:"username-particles-js"});
    controlAudio();
    // Start with the main center container off-screen so it can slide in after the overlay is dismissed
    const center = document.querySelector('.center');
    if (center) center.classList.add('offscreen-top');
} 
init();
