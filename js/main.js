// BBC Trust Main JavaScript
/* ==========================================
   BBC TRUST
   MAIN.JS
========================================== */

/* Loader */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if(loader){

        loader.classList.add("hidden");

    }

});

/* Sticky Header */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(header){

        header.classList.toggle("scrolled", window.scrollY > 50);

    }

});

/* Mobile Menu */

const menuToggle = document.querySelector(".menu-toggle");

const navMenu = document.querySelector(".nav-menu");

if(menuToggle){

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        menuToggle.classList.toggle("active");

    });

}

/* Close Menu */

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        if(menuToggle){

            menuToggle.classList.remove("active");

        }

    });

});

/* Smooth Scroll */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/* Back To Top */

const backTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(!backTop) return;

    if(window.scrollY > 400){

        backTop.classList.add("show");

    }else{

        backTop.classList.remove("show");

    }

});

if(backTop){

    backTop.addEventListener("click", () => {

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

/* Progress Bar */

const progressBar = document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {

    if(!progressBar) return;

    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

    const progress = (window.scrollY / totalHeight) * 100;

    progressBar.style.width = progress + "%";

});

/* FAQ */

document.querySelectorAll(".faq-item").forEach(item => {

    const question = item.querySelector(".faq-question");

    if(question){

        question.addEventListener("click", () => {

            item.classList.toggle("active");

        });

    }

});

/* Counter Animation */

const counters = document.querySelectorAll(".counter");

const speed = 200;

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        const update = () => {

            const current = +counter.innerText;

            const increment = Math.ceil(target / speed);

            if(current < target){

                counter.innerText = current + increment;

                setTimeout(update,15);

            }else{

                counter.innerText = target;

            }

        };

        update();

    });

};

let counterStarted = false;

window.addEventListener("scroll", () => {

    const section = document.querySelector(".impact-section");

    if(section && !counterStarted){

        const top = section.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            startCounter();

            counterStarted = true;

        }

    }

});

/* Scroll Reveal */

const reveals = document.querySelectorAll(

".fade-up,.fade-left,.fade-right,.zoom,.rotate"

);

function revealElements(){

    reveals.forEach(el=>{

        const top = el.getBoundingClientRect().top;

        if(top < window.innerHeight - 80){

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealElements);

window.addEventListener("load", revealElements);

/* Active Navigation */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", ()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-120;

        if(window.scrollY>=top){

            current=section.getAttribute("id");

        }

    });

    document.querySelectorAll(".nav-menu a").forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

/* Lazy Loading */

document.querySelectorAll("img").forEach(img=>{

    img.setAttribute("loading","lazy");

});

/* Current Year */

const year=document.getElementById("year");

if(year){

    year.textContent=new Date().getFullYear();

}

/* ==========================================
   MAIN.JS COMPLETE
========================================== */
