
const burger = document.querySelector('#nav-icon');
const navUl = document.querySelector('.nav__ul')
const iconsNav = document.querySelector('.nav__icons-wrapper')
burger.addEventListener('click', () => {
    burger.classList.toggle("open")

    const ulStyle = window.getComputedStyle(navUl, null).getPropertyValue("left");
    if (ulStyle !== '0px') {
        navUl.style.left ='0%'
        iconsNav.style.bottom ='0%'
    } else {
        navUl.style.left ='-100%'
        iconsNav.style.bottom ='-110%'
    }


    }   
)


