document.addEventListener("DOMContentLoaded", () => {
    let sliderBlock = document.getElementById('slider-block');
    let sliderElements = sliderBlock.querySelectorAll('.header-results-img-block');
    let arrowBack = document.getElementById('slider-arrow-back');
    let arrowNext = document.getElementById('slider-arrow-next');

    let currentSliderPosition = 0;
    const updateSliderElements = (currentSliderPosition) => {
        sliderElements.forEach((el, index) => {
            if (index === currentSliderPosition) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        });
    }
    arrowBack.addEventListener('click', (event) => {
        event.stopPropagation();
        if (currentSliderPosition - 1 < 0) {
            currentSliderPosition = sliderElements.length - 1;
        } else {
            currentSliderPosition--;
        }
        updateSliderElements(currentSliderPosition);
    });

    arrowNext.addEventListener('click', (event) => {
        event.stopPropagation();
        if (currentSliderPosition + 1 >= sliderElements.length) {
            currentSliderPosition = 0;
        } else {
            currentSliderPosition++;
        }

        updateSliderElements(currentSliderPosition);
    });
});