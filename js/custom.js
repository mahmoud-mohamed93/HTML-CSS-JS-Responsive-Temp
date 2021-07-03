//Start Back To Top Button
    //Get the button
let myButton = document.getElementById("btn-back-to-top");
    //Use if to show button
window.onscroll = function () {
    if (window.pageYOffset >= 500) {
        myButton.classList.add('active');
    } else {
        myButton.classList.remove('active');
      }
};
    //back to top
myButton.onclick = function () {
    'use strict';
    window.scrollTo(0, 0);
};
//End Back To Top Button

//another way to buld back to top button
// //Get the button
// let myButton = document.getElementById("btn-back-to-top");
// //Use if to show button
// window.onscroll = function () {
//     if (
//         document.body.scrollTop > 500 ||
//         document.documentElement.scrollTop > 500
//       ) {
//         myButton.style.display = "block";
//       } else {
//         myButton.style.display = "none";
//       }};
// //back to top
// myButton.addEventListener("click", backToTop);

// function backToTop() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

//Start Burger Menu
let btn = document.querySelector('#mobile-menu'),
    navMenu = document.querySelector('.nav-menu');

    btn.addEventListener('click', function() {
        btn.classList.toggle('is-active');
        navMenu.classList.toggle('active');
    });
//End Burger Menu

//Start Fixed Menu
let header = document.querySelector('.header'),
    navLinks = document.getElementsByClassName('nav-links');
    headerHeight = header.offsetHeight;

window.addEventListener('scroll', fixedMenu);

function fixedMenu () {
    if (window.pageYOffset >= headerHeight - 10) {
        header.classList.add('fixed-menu');
        for (i = 0; i < navLinks.length; i++)
        navLinks[i].classList.add('less-height');
    } else {
        header.classList.remove('fixed-menu');
        for (i = 0; i < navLinks.length; i++)
        navLinks[i].classList.remove('less-height');
    }
};
//End Fixed Menu

//Start nav-menu Opacity
headerHeight = header.offsetHeight;

window.addEventListener('scroll', opacityLess);

function opacityLess () {
    if (window.pageYOffset >= headerHeight - 25) {
        navMenu.classList.add('opacity-less');
    } else {
        navMenu.classList.remove('opacity-less');
    }
};
//End nav-menu Opacity

//Start Active Link
let menuLinks = document.querySelectorAll('.nav-menu li .nav-links');

for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', activeAnchor);
}

function activeAnchor () {
    for (let i = 0; i < menuLinks.length; i++) {
        menuLinks[i].classList.remove('active');
    }
    this.classList.add('active');
}
//End Active Link

//Add and Remove 'Toggle' Class 'show' for html Variable
// let btn = document.querySelector('#mobile-menu'),
//     navMenu = document.querySelector('.nav-menu');

// btn.addEventListener('click', showHideMenu);

// function showHideMenu() {
//     if (navMenu.classList.contains('show')) {
//         navMenu.classList.remove('show');
//     } else {
//         navMenu.classList.add('show');
//     }
// }

