const burger = document.querySelector('#nav-burger');
const navUl = document.querySelector('.nav__ul');
const iconsNav = document.querySelector('.nav__icons-wrapper');

function toggleBurger() {
    navUl.classList.toggle('nav__ul-toggle');
    iconsNav.classList.toggle('nav__icons-wrapper-toggle');
}

navUl.addEventListener('click', event => {
    let target = event.target;

    if (target.tagName != 'A')
        return;

    toggleBurger();
});

burger.addEventListener('click', () => {
    toggleBurger();
})