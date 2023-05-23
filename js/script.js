let images = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp',
]

let sliderElement = document.querySelector('.slider');
let sliderContent = "";

for (let i = 0; i < images.length; i++) {
    let currentImage = images[i];
    sliderContent += `
        <div class="slide">
            <img src="${currentImage}" />
        </div>
        `


}


sliderElement.innerHTML = sliderContent;

let allSlides = document.getElementsByClassName('slide');

let active_element = 0;
allSlides[active_element].classList.add('active');

let prevButton = document.querySelector('.prev');
let nextButton = document.querySelector('.next');


nextButton.addEventListener('click', function () {
    if(active_element < (images.length - 1)) {
        allSlides[active_element].classList.remove('active');
        active_element++;
        allSlides[active_element].classList.add('active');

    }



})

prevButton.addEventListener('click', function () {
    if(active_element > 0) {
        allSlides[active_element].classList.remove('active');
        active_element--;
        allSlides[active_element].classList.add('active');

    }



})

