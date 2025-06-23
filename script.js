'use strict';

const elemToggleFunc = function (elem) { elem.classList.toggle('active'); }

const navbar = document.querySelector('[data-navbar]');
const overlay = document.querySelector('[data-overlay]');
const navCloseBtn = document.querySelector('[data-nav-close-btn]');
const navOpenBtn = document.querySelector('[data-nav-open-btn]');
const navbarLinks = document.querySelectorAll('[data-nav-link]');

const navElemArr = [overlay, navCloseBtn, navOpenBtn, ...navbarLinks];

const toggleNavbar = function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
};

navElemArr.forEach(elem => {
    elem.addEventListener('click', toggleNavbar);
});

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function() {
    window.scrollY >= 400 ? header.classList.add("active") : header.classList.remove("active");
});

// Dot Navigation for Property Section
const propertySection = document.querySelector('.property .has-scrollbar');
if (propertySection) {
    const items = propertySection.querySelectorAll('li');
    const dotContainer = document.createElement('div');
    dotContainer.classList.add('dot-navigation');
    items.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            items[index].scrollIntoView({ behavior: 'smooth', inline: 'start' });
            dotContainer.querySelectorAll('.dot').forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
        });
        dotContainer.appendChild(dot);
    });
    propertySection.parentNode.appendChild(dotContainer);

    propertySection.addEventListener('scroll', () => {
        const scrollLeft = propertySection.scrollLeft;
        const itemWidth = items[0].offsetWidth + 15; // Including gap
        const activeIndex = Math.round(scrollLeft / itemWidth);
        dotContainer.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === activeIndex);
        });
    });
}
