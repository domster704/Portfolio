document.addEventListener("DOMContentLoaded", () => {
    const PX_IN_REM = parseFloat(getComputedStyle(document.documentElement).fontSize);

    const headerListElem = document.getElementsByClassName('header-list-element');
    for (let i of headerListElem) {
        i.addEventListener('click', () => {
            goToElement(i, i.id);
        });
    }

    /**
     * Scrolls to a specific element, highlights a line, and removes the highlight from other lines.
     * @param {HTMLElement} line - The line element to highlight.
     * @param {string} elementStr - The class name of the element to scroll to.
     */
    function goToElement(line, elementStr) {
        // Scroll to the element
        let elem = $(`.${elementStr}`);
        $('html').animate({
            scrollTop: elem.offset().top - 6 * PX_IN_REM + 1
        });

        // Remove highlight from other lines
        let listOfChosenItems = document.getElementsByClassName('header-list-element');
        for (let i of listOfChosenItems) {
            i.classList.remove("active");
        }

        // Highlight the current line
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
});

