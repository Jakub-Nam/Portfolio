const burger = document.querySelector('#nav-burger');
const navUl = document.querySelector('.nav__ul');


navUl.addEventListener('click', event => {
    let target = event.target;

    if (target.tagName != 'A')
        return;

    toggleBurger();
});

burger.addEventListener('click', () => {
    toggleBurger();
})

function toggleBurger() {
    navUl.classList.toggle('nav__ul-toggle');
}
