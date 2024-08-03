
//make nav bar responsive
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function() {
    links.classList.toggle("show-links");
});
//make nav bar responsive end