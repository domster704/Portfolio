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

JOV_VIEWS.list.forEach(elem => {
    new TemplateJob(elem, JOV_VIEWS.htmlPlace);
});

PROJECT_VIEWS.list.forEach(elem => {
    new TemplateProject(elem, PROJECT_VIEWS.htmlPlace);
});

const deltaForScroll = 6 * PX_IN_REM;
$(window).scroll(() => {
    let position = $(this).scrollTop();

    if (position >= $('.main-project-list').offset().top - deltaForScroll) {
        let listOfChosenItems = document.getElementsByClassName('header-list-element');
        for (let i of listOfChosenItems) {
            i.classList.remove("active");
        }
        listOfChosenItems[2].classList.add("active")
    } else if (position >= $('.main-job-place-list').offset().top - deltaForScroll) {
        let listOfChosenItems = document.getElementsByClassName('header-list-element');
        for (let i of listOfChosenItems) {
            i.classList.remove("active");
        }
        listOfChosenItems[1].classList.add("active")
    } else if (position >= $('.main-about').offset().top - deltaForScroll) {
        let listOfChosenItems = document.getElementsByClassName('header-list-element');
        for (let i of listOfChosenItems) {
            i.classList.remove("active");
        }
        listOfChosenItems[0].classList.add("active")
    }
});

