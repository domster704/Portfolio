class Template {
    constructor(config, place) {
        this.config = config;
        this.place = place;
        this.temp = '';
    }

    renderTemplate() {
        const htmlPlace = document.querySelector(`.${this.place}`);
        htmlPlace.innerHTML = this.temp + htmlPlace.innerHTML;
    }

    generateSubPosition() {
        let subPositionHTML = [];
        for (let i of this.config.subPosition) {
            subPositionHTML.push(`<div>${i}</div>`)
        }
        return subPositionHTML.join("");
    }

    generateSkills() {
        let skillsHTML = [];
        for (let i of this.config.skills) {
            skillsHTML.push(`<div class="main-job-place-list-element-skill">${i}</div>`)
        }
        return skillsHTML.join("");
    }
}

class TemplateJob extends Template {
    constructor(config, place) {
        super(config, place);
        this.temp = `
        <a href="${this.config.companyURL}" target="blank">
            <div class="main-job-place-list-element">
                <div class="main-job-place-list-element-header">${this.config.date}</div>
                <div class="main-job-place-list-element-block">
                    <div class="main-job-place-list-element-specialization">
                        <div class="main-job-place-list-element-block-header">
                            <div class="main-job-place-list-element-position">${this.config.position}</div>
                            <div class="main-job-place-list-element-company">${this.config.companyName}</div>
                            <div><img class="main-job-place-list-element-block-header-link" src="" alt=""></div>
                        </div>
                        <div class="main-job-place-list-element-block-under-header">${this.generateSubPosition()}</div>
                    </div>
                    <div class="main-job-place-list-element-specialization-about">${this.config.about}</div>
                    <div class="main-job-place-list-element-skills-list">
                        ${this.generateSkills()}
                    </div>
                </div>
            </div>
        </a>`
        this.renderTemplate();
    }
}

class TemplateProject extends Template {
    constructor(config, place) {
        super(config, place);
        this.temp = `
        <a href="${this.config.projectURL}" target="blank">
                <div class="main-job-place-list-element">
                    <div class="main-job-place-list-element-header">
                        <div class="main-job-place-list-element-image-block">
                            <img class="main-job-place-list-element-image" src="${this.config.image}" alt="">
                        </div>
                    </div>
                    <div class="main-job-place-list-element-block">
                        <div class="main-job-place-list-element-specialization">
                            <div class="main-job-place-list-element-block-header">
                                <div>${this.config.projectName}</div>
                                <div><img class="main-job-place-list-element-block-header-link" src="" alt="">${this.generateSubPosition()}</div>
                            </div>
                        </div>
                        <div class="main-job-place-list-element-specialization-about">
                            ${this.config.about}
                        </div>
                        <div class="main-job-place-list-element-skills-list">
                            ${this.generateSkills()}
                        </div>
                    </div>
                </div>
            </a>`
        this.renderTemplate();
    }
}

VIEWS_CONFIG.job.list.forEach(elem => {
    new TemplateJob(elem, VIEWS_CONFIG.job.htmlPlace);
})

VIEWS_CONFIG.projects.list.forEach(elem => {
    new TemplateProject(elem, VIEWS_CONFIG.projects.htmlPlace);
})

