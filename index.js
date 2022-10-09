const hamIcon = document.querySelector('nav .mobile-navbar-btn .hamburger-icon');
const closeIcon = document.querySelector('nav .mobile-navbar-btn .close-icon');
const mobileNav = document.querySelector('.mobile-nav');

hamIcon.addEventListener('click',() => {
    hamIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
    mobileNav.classList.add('show');
})

closeIcon.addEventListener('click',() => {
    closeIcon.classList.add('hidden');
    hamIcon.classList.remove('hidden');
    mobileNav.classList.remove('show');
})