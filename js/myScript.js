// Navbar
let navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
navToggle.addEventListener("click", () => links.classList.toggle("show-links"));

// Slider
const slider = document.querySelector('.slider-img');
const sliderBtn = [...document.querySelectorAll('.slider-btn')];
// const sliderBtn = Array.from(document.querySelectorAll('.slider-btn'));

// On load set default slider image
window.addEventListener('DOMContentLoaded', () => slider.src = `./images/product0.png`);

sliderBtn.map(btn => {
    let count = 0;
    const images = ['product1.png', 'product8.png', 'product0.png'];
    const slideImage = [...images];

    btn.addEventListener('click', e => {
        const currentBtn = e.currentTarget.dataset.id;
        (currentBtn === 'prevBtn')
            ? ( count > 0 ) ? count-- : count = (slideImage.length - 1)
            : ( count < (slideImage.length - 1) ) ? count++ : count = 0;
    
        slider.src = `./images/${slideImage[count]}`;
    })
})

