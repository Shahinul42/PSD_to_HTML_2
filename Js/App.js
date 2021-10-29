//////////////////////////////////////////////////////////////////////
//============= SET PRELOADER FUNCTION ==============

//window.onload = () => {
    //document.querySelector(".Pre_loder").style.opacity = "0";
    //document.querySelector(".Main_web_page").style.opacity = "1";
//}
 setTimeout(function () {
 document.querySelector(".Main_web_page").style.opacity = "1";
 }, 1500)

 setTimeout(function () {
     document.querySelector(".Pre_loder").style.opacity = "0";
 }, 1500)
setTimeout(function () {
    document.querySelector(".Pre_loder").style.display = "none";
}, 2500)

//////////////////////////////////////////////////////////////////////////

// =========================================================
// ---------------START JQUERY TYPE EFFECT--------------
var typed = new Typed('.Animated_text', {
    strings: ['Hello I am Shahinul islam.....',
        'I am an expert web designer.',
        'This is my another design.',
        'Have a good day!'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    showCursor: false
});
// ---------------END JQUERY TYPE EFFECT--------------
// =========================================================


// =========================================================
// ---------------START ACTIVE NAVE--------------

window.addEventListener("scroll", function () {
    let List_items = document.querySelectorAll("li>a");
    List_items = Array.from(List_items);

    let Home_arya = document.querySelector("#home").offsetTop - 100;
    let About_arya = document.querySelector("#about").offsetTop - 300;
    let Team_arya = document.querySelector("#team").offsetTop - 300;
    let Service_arya = document.querySelector("#service").offsetTop - 300;
    let Portfolio_arya = document.querySelector("#portfolio").offsetTop - 300;
    let Contact_arya = document.querySelector("#contact").offsetTop - 300;

    let Top = window.scrollY;


    if (Top >= Home_arya & Top < About_arya) {
        List_items[0].classList.add("Active")
    } else {
        List_items[0].classList.remove("Active");
    }

    if (Top >= About_arya & Top < Team_arya) {
        List_items[1].classList.add("Active");
    } else {
        List_items[1].classList.remove("Active");
    }

    if (Top >= Team_arya & Top < Service_arya) {
        List_items[2].classList.add("Active");
    } else {
        List_items[2].classList.remove("Active");
    }

    if (Top >= Service_arya & Top < Portfolio_arya) {
        List_items[3].classList.add("Active");
    } else {
        List_items[3].classList.remove("Active");
    }

    if (Top >= Portfolio_arya & Top < Contact_arya) {
        List_items[4].classList.add("Active");
    } else {
        List_items[4].classList.remove("Active");
    }

    if (Top >= Contact_arya) {
        List_items[5].classList.add("Active");
    } else {
        List_items[5].classList.remove("Active");
    }

})
// ---------------END ACTIVE NAVE--------------
// =========================================================



// ========== SMOOTH SCROLL ============
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800,
    speedAsDuration: true
});



new WOW().init();



// ================= AFTER SCROLL STICKY NAVE =================
let Header_arya_offset = document.querySelector(".Header_arya").offsetTop;
let Nav_bottom = document.querySelector(".Navs .Nav_bottom");

window.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop > Header_arya_offset) {
        Nav_bottom.classList.add("Sticky")
    } else {
        Nav_bottom.classList.remove("Sticky")
    }
});


// =============== USE HUMBARGAR ===============
let Humbargar = document.querySelector(".Humbargar");
let Navs = document.querySelector(".Navs");
let Ul = document.querySelector(".Navs ul");
let Spans = document.querySelectorAll(".Humbargar span");

let Active = false;

Humbargar.addEventListener("click", function () {
    if (Active == false) {
        Navs.classList.add("Active");
        Spans[0].style.cssText = "transform:rotate(45deg);";
        Spans[1].style.cssText = "opacity:0;";
        Spans[2].style.cssText = "transform:rotate(-45deg);";
        Active = true;
    } else {
        Navs.classList.remove("Active");
        Spans[0].style.cssText = "transform:rotate(0);";
        Spans[1].style.cssText = "opacity:1;";
        Spans[2].style.cssText = "transform:rotate(0);";
        Active = false;
    }
})

Ul.addEventListener("click", function () {
    Navs.classList.remove("Active");
    Spans[0].style.transform = "rotate(0)";
    Spans[1].style.opacity = "1";
    Spans[2].style.transform = "rotate(0)";
    Active = false;
})


