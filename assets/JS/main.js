// "use strict"
let $ = document;

// input navbar

let inputHeader = $.getElementById("input");
let mark = $.getElementById("mark");
function showBtn () {
    mark.style.display = "block";
}
function clearInput() {
    inputHeader.value = "";
    mark.style.display = "none";
}

// navbar
let navbar = $.getElementById("navbar-scroll");
let navResponsive = $.getElementById("nav-responsive");
let navMainResponsive = $.getElementById("nav-main-responsive");
navMainResponsive.style.display = "none";
window.onscroll = function() {scrollFunction()};
function scrollFunction () {
    if ($.body.scrollTop > 150 || $.documentElement.scrollTop > 150) {
        navbar.style.display = "block";
        navbar.style.position = "fixed";
        // nav responsive
        navMainResponsive.style.display = "none";
        navResponsive.style.display = "flex";
        navResponsive.style.position = "fixed";
        navResponsive.style.top = 0;
        navResponsive.style.left = 0;
        navResponsive.style.marginLeft = "0";
        navResponsive.style.marginRight = "0";
        navResponsive.style.paddingRight = ".7rem";
        navResponsive.style.paddingLeft = ".7rem";
        if(window.innerWidth <= 840) {
            navMainResponsive.style.display = "flex";
        }
    } else {
        navbar.style.display = "none";
        // nav responsive
        navResponsive.style.position = "static";
        navResponsive.style.display = "none";
        navResponsive.style.marginLeft = "1.5rem";
        navResponsive.style.marginRight = "1.5rem";
        navResponsive.style.paddingLeft = "0";
        navResponsive.style.paddingRight = "0";
    }
}

// image slider

let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = $.getElementsByClassName("mySlides");
    let square = $.getElementsByClassName("square");
    if (n > slides.length) {
        slideIndex = 1
    }    
    if (n < 1) {
        slideIndex = slides.length
    }
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for(i = 0; i < square.length; i++) {
        square[i].className = square[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    square[slideIndex - 1].className += " active";
}

let slideIndexAuto = 0;
showSlidesAuto();
function showSlidesAuto() {
    let i;
    let slides = $.getElementsByClassName("mySlides");
    let square = $.getElementsByClassName("square");
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndexAuto++;
    if (slideIndexAuto > slides.length) {
        slideIndexAuto = 1;
    }    
    for(i = 0; i < square.length; i++) {
        square[i].className = square[i].className.replace(" active", "");
    }
    slides[slideIndexAuto - 1].style.display = "block";
    square[slideIndexAuto - 1].className += " active";
    setTimeout(showSlidesAuto, 4000);
}

// product
let mainTxt = $.getElementById("main-text");
let coverMenu = $.getElementById("cover-menu");

let productMenu = $.getElementsByClassName("product-menu");
let categoryProducts = $.getElementsByClassName("category-products");
let singleProducts = $.getElementsByClassName("single-products");
let current = 0;
let beforeCurrent = 0;
const showmenu = (panelIndex, category, product, name) => {
    beforeCurrent = current;
    current = panelIndex;
    productMenu[current].classList.add("active-product-menu");
    productMenu[beforeCurrent].classList.remove("active-product-menu");
    for (let i = 0; i < categoryProducts.length; i++) {
        categoryProducts[i].style.display = 'none';
    }
    for (let i = 0; i < singleProducts.length; i++) {
        singleProducts[i].style.display = 'none';
    }
    $.getElementById(category).style.display = 'block';
    $.getElementById(product).style.display = 'block';
    mainTxt.innerHTML = name;
}

// show menu

function showMenu() {
    coverMenu.classList.toggle("menu-show")
}

// slider single product

let slideProductIndex = 1;
showSingleProduct(slideProductIndex);
function plusSlidesSingleProduct(n) {
    showSingleProduct(slideProductIndex += n);
}
function showSingleProduct(n) {
    let i;
    let j;
    let singleProduct = $.getElementsByClassName("single-product");
    let singleProductFeminine = $.getElementsByClassName("single-product-feminine");
    if (n > singleProductFeminine.length) {
        slideProductIndex = singleProductFeminine.length;
    }
    if (n > singleProduct.length) {
        slideProductIndex = singleProduct.length;
    }    
    if (n < 1) {
        slideProductIndex = 1;
    }
    for(i = 0; i < singleProduct.length; i++) {
        singleProduct[i].style.display = "none";
    }
    for(j = 0; j < singleProductFeminine.length; j++) {
        singleProductFeminine[j].style.display = "none";
    }
    singleProduct[slideProductIndex - 1].style.display = "block";
    singleProductFeminine[slideProductIndex - 1].style.display = "block";
}

let slideProductIndexAuto = 0;
showSlidesProductAuto();
function showSlidesProductAuto() {
    let i;
    let j;
    let singleProduct = document.getElementsByClassName("single-product");
    let singleProductFeminine = $.getElementsByClassName("single-product-feminine");
    for(i = 0; i < singleProduct.length; i++) {
        singleProduct[i].style.display = "none";
    }
    for(j = 0; j < singleProductFeminine.length; j++) {
        singleProductFeminine[j].style.display = "none";
    }
    slideProductIndexAuto++;
    if (slideProductIndexAuto > singleProduct.length) {
        slideProductIndexAuto = 1;
    }    
    singleProductFeminine[slideProductIndexAuto - 1].style.display = "block";
    singleProduct[slideProductIndexAuto - 1].style.display = "block";
    setTimeout(showSlidesProductAuto, 4000);
}

// offer time in single product

const countdown = () => {
    const countDate = new Date("apr 24, 2022 00:00:00").getTime();
    const now = new Date().getTime();
    const remainingTime= countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    let textDay = Math.floor(remainingTime / day);
    let textHour = Math.floor((remainingTime % day) / hour);
    let textMinute = Math.floor((remainingTime % hour) / minute);
    let textSecond = Math.floor((remainingTime % minute) / second);

    if (textDay < 10) {
        textDay = "0" + textDay;
    }
    if (textHour < 10) {
        textHour = "0" + textHour;
    }
    if (textMinute < 10) {
        textMinute = "0" + textMinute;
    }
    let time = `${textDay}&nbsp&nbsp&nbsp&nbsp:&nbsp&nbsp&nbsp&nbsp ${textHour}&nbsp&nbsp&nbsp&nbsp:&nbsp&nbsp&nbsp ${textMinute}`;
    let countdownElem = $.querySelectorAll(".countdown");
    countdownElem.forEach(count => {
        count.innerHTML = time;
    });
}
setInterval(countdown, 500);

// show and remove hambur

let body = $.getElementById("body");
let closeMenu = $.getElementById("close-menu");
let hambur = $.getElementById("hambur");
let mainMenu = $.querySelector(".main-menu");
let sectionHambur = $.getElementById("hamburger-menu-responsive");
let hamburgerRes = $.getElementById("hambur-res");
hambur.addEventListener('click', () => {
    $.body.style.overflow = "hidden";
    body.style.transform = "translateX(-85%)";
    sectionHambur.classList.toggle("hamburger-menu");
    sectionHambur.style.overflowY = "sscroll";
    hambur.style.display = 'none';
});
hamburgerRes.addEventListener("click", () => {
    body.style.transform = "translateX(-85%)";
    sectionHambur.classList.toggle("hamburger-menu");
    hambur.style.display = 'none';
    $.body.style.overflow = "hidden";
})
function removeHamburgerMenu() {
    sectionHambur.classList.toggle("hamburger-menu");
    body.style.transform = "translateX(0)";
    hambur.style.display = 'block';
    $.body.style.overflow = "visible";
}
mainMenu.style.height = window.innerHeight + 'px';

// hamburger menu

let item = $.getElementsByClassName("item");
let listHamburger = $.getElementsByClassName("list-hamburger-menu");
function showHamburgerMenu(index, name) {
    for(let  i = 0; i < listHamburger.length; i++) {
        listHamburger[i].style.display = "none";
        item[i].style.background = "#e8e8e8";
    }
    $.getElementById(name).style.display = "block";
    $.getElementById(name).style.background = "white";
    item[index].style.background = "white";
    mainMenu.style.background = "white";
}


// item of hanburger menu

function showItemNavbar(name) {

}