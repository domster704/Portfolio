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