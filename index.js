const nav_bar = document.querySelector("#nav_bar");
const nav_item = document.querySelectorAll('.nav_item')
const hamburger_btn = document.querySelector('#hamburger_btn');
const nav_menu = document.querySelector('#nav_menu');
const top_btn = document.querySelector("#top_btn");

// Get nav bar and set class based on scrollY location
window.addEventListener("scroll", () => {
    let scroll = window.scrollY;

    if (scroll < 50) {
        nav_bar.classList.remove('solid_nav')
        nav_bar.classList.add('transparent_nav')

        top_btn.classList.remove('scrolled')
    }

    if (scroll >= 50) {
        nav_bar.classList.remove('transparent_nav')
        nav_bar.classList.add('solid_nav')

        top_btn.classList.add('scrolled')
    } 

    
});

// Animate hamburger icon and mobile nav
hamburger_btn.addEventListener('click', () => {
    // Close menu
    if (nav_bar.classList.contains('nav_opened')) {
        //hamburger_btn.classList.remove('opened')
        //nav_menu.classList.remove('nav_opened')
        //nav_item.forEach(item => {
        //    item.classList.remove('nav_opened')
        //    });
        nav_bar.classList.remove('nav_opened')
        
    } 

    // Open menu
    else {
        console.log("Closed!")
        nav_bar.classList.add('nav_opened')
        //hamburger_btn.classList.add('opened')
        //nav_menu.classList.add('nav_opened')
        //nav_item.forEach(item => {
        //   item.classList.add('nav_opened')
        //    });
    }
});

// Remove nav_over when link is clicked
nav_item.forEach(item => {
    item.addEventListener('click', () =>{
        nav_bar.classList.remove('nav_opened')
    });
});

top_btn.addEventListener('click', () => {
    nav_bar.classList.remove('nav_opened')
});