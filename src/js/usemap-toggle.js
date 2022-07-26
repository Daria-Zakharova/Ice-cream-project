(() => { 

const activeHeroImage = document.querySelector(".hero__img--ice-cream"); 

if (window.matchMedia("(max-width: 1199px)").matches) { 
activeHeroImage.removeAttribute("usemap"); 
} 

})();