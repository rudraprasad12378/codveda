// ============================
// MOBILE MENU TOGGLE
// ============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// ============================
// SMOOTH SCROLL
// ============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


// ============================
// STICKY NAVBAR SHADOW
// ============================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.15)";

    }else{

        header.style.boxShadow = "0 2px 15px rgba(0,0,0,.08)";

    }

});


// ============================
// BUTTON CLICK
// ============================

const exploreBtn = document.querySelector(".primary-btn");

exploreBtn.addEventListener("click", () => {

    document.querySelector("#services").scrollIntoView({
        behavior: "smooth"
    });

});