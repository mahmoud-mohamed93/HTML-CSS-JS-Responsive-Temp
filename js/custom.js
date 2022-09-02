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
        header.classList.add('fixed-menu-main-color');
        for (i = 0; i < navLinks.length; i++)
        navLinks[i].classList.add('less-padding');
    } else {
        header.classList.remove('fixed-menu-main-color');
        for (i = 0; i < navLinks.length; i++)
        navLinks[i].classList.remove('less-padding');
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
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', activeAnchor);
}

function activeAnchor () {
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove('active');
    }
    this.classList.add('active');
    navMenu.classList.remove('active');
    btn.classList.remove('is-active');
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

//Start NaveScroll
setTimeout(() => {
    let landing = document.querySelector('.landing');
    let features = document.querySelector('.features');
    let services = document.querySelector('.services');
    let portfolio = document.querySelector('.portfolio');
    let about = document.querySelector('.about');
    let contact = document.querySelector('.contact');

    landingHeight = landing.offsetHeight;
    featuresHeight = features.offsetHeight;
    servicesHeight = services.offsetHeight;
    portfolioHeight = portfolio.offsetHeight;
    aboutHeight = about.offsetHeight;
    contactHeight = contact.offsetHeight;
    console.log(landingHeight);
    console.log(featuresHeight);
    console.log(servicesHeight);
    console.log(portfolioHeight);
    console.log(aboutHeight);
    console.log(contactHeight);

    function removeActive() {
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.remove('active');
        }
    }

    window.addEventListener('scroll', function () {
        let scroll = document.documentElement.scrollTop + 1
        // let scroll = window.pageYOffset + 1 
        console.log(scroll);
        
        if (scroll <= landing.getBoundingClientRect().top + 1) {
            removeActive();
            document.getElementById("nav_home").classList.add("active");
        }
        if (scroll >= landingHeight + featuresHeight) {
            removeActive();
            document.getElementById("nav_services").classList.add("active");
        }
        if (scroll >= landingHeight + featuresHeight + servicesHeight) {
            removeActive();
            document.getElementById("nav_portfolio").classList.add("active");
        }
        if (scroll >= landingHeight + featuresHeight + servicesHeight + portfolioHeight) {
            removeActive();
            document.getElementById("nav_about").classList.add("active");
        }
        if (scroll >= landingHeight + featuresHeight + servicesHeight + portfolioHeight + aboutHeight - headerHeight) {
            removeActive();
            document.getElementById("nav_contact").classList.add("active");
        }
    });

}, 300);
//End NaveScroll

// same NaveScroll result with jquery
// $(window).scroll(function () {

//     $('.content_text').each(function () {

//         if ($(window).scrollTop() > $(this).offset().top - 74) {
//             var content_textID = $(this).attr('id');
//             $('.side_bar ul li a').removeClass('active')
//             $('.side_bar ul li a[data-scroll="' + content_textID + '"]').addClass('active')
//         }
//     });
// })