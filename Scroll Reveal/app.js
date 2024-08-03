const revealElements = document.querySelectorAll("[data-reveal]");

const scrollReveal = function(){
    for (let i = 0; i < revealElements.length; i++){
        const isElementOnScreen = revealElements[i].getBoundingClientRect().top < window.innerHeight;

        if (isElementOnScreen){
            revealElements[i].classList.add("revealed");
        }else{
            revealElements[i].classList.remove("revealed");
        }

        console.log(isElementOnScreen);
    }
}

window.addEventListener("scroll",scrollReveal);
window.addEventListener("load",scrollReveal);