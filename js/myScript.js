// Navbar
let navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
navToggle.addEventListener("click", () => links.classList.toggle("show-links"));

// Slider
const slider = document.querySelector('.slider-img');
const slideBtn = [...document.querySelectorAll('.slider-btn')];

window.addEventListener('DOMContentLoaded', () => slider.src = `./images/services-bg.jpg`);

slideBtn.map(btn => {
    let count = 0;
    const [img1, img2, img3] = ['services-bg.jpg', 'slide_02.jpg', 'slide_03.jpg'];

    const slideImage = [img1, img2, img3];
    btn.addEventListener('click', e => {
        const currentBtn = e.currentTarget.dataset.id;
        if (currentBtn === 'prevBtn') {
            if(count > 0) {
                count--
            } else {
                count = slideImage.length - 1;
            }
        } else {
            if (count < (slideImage.length - 1)) {
                count++
            } else {
                count = 0
            }
        }
        slider.src = `./images/${slideImage[count]}`
    })
})

