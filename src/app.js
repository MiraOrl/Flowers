const burger = document.querySelector(".burger-menu");

burger.addEventListener("click", function(){
    burger.classList.toggle("burger-menu--opened");
    burger.classList.toggle("burger-menu--closed");
});

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
    
}