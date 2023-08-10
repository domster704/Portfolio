const PX_IN_REM = parseFloat(getComputedStyle(document.documentElement).fontSize);

function goToElement(line, elementStr) {
    let elem = $(`.${elementStr}`);
    $('html').animate({
        scrollTop: elem.offset().top - 6 * PX_IN_REM
    });

    let listOfChosenItems = document.getElementsByClassName('header-list-element');
    for (let i of listOfChosenItems) {
        i.classList.remove("active");
    }

    line.classList.add('active');
}

const spotlight = document.querySelector(".spotlight");
window.addEventListener('mousemove', e => updateSpotlight(e));
window.addEventListener('mousedown', e => updateSpotlight(e));
window.addEventListener('mouseup', e => updateSpotlight(e));

function updateSpotlight(event) {
    spotlight.style.background = `radial-gradient(circle at ${parseInt(event.clientX / window.innerWidth * 100)}% ${parseInt(event.clientY / window.innerHeight * 100)}%, rgba(29, 78, 216, 0.15) 0%, rgba(0, 0, 0, 0.00) 80.00%)`;
}
