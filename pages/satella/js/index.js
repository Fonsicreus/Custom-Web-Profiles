import { createElement,createParticles,enterSite,controlAudio,setTextRotation } from "./utilities.js";
function init(){
    const overlay = createElement({className:"click-to-enter",name:'overlay'}); // Add the class 'click-to-enter'
    const textElement = createElement({tag:"p",container:overlay,className:"click-text",textContent:"click to enter",onClick:enterSite}); // Use a <p> for the text
    document.body.appendChild(overlay);
    createParticles({container:overlay,config:"config2",name:"particles-js"});
    const usernameElement = document.querySelector(".username")
    createParticles({container:usernameElement,config:"config1",name:"username-particles-js"});
    controlAudio();
    

} 
init();