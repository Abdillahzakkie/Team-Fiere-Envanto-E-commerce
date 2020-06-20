// Navbar
let navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
navToggle.addEventListener("click", () => links.classList.toggle("show-links"));

// Slider
const slider = document.querySelector('.slider-img');
const sliderBtn = [...document.querySelectorAll('.slider-btn')];
// const sliderBtn = Array.from(document.querySelectorAll('.slider-btn'));

// On load set default slider image
window.addEventListener('DOMContentLoaded', () => slider.src = `./images/services-bg.jpg`);

sliderBtn.map(btn => {
    let count = 0;
    const [img1, img2, img3] = ['services-bg.jpg', 'slide_02.jpg', 'slide_03.jpg'];
    const slideImage = [img1, img2, img3];

    btn.addEventListener('click', e => {
        const currentBtn = e.currentTarget.dataset.id;
        (currentBtn === 'prevBtn')
            ? ( count > 0 ) ? count-- : count = (slideImage.length - 1)
            : ( count < (slideImage.length - 1) ) ? count++ : count = 0;
    
        slider.src = `./images/${slideImage[count]}`;
    })
})

