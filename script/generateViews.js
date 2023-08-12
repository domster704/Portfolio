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

class TemplateAllProject extends Template {
    constructor(config, place) {
        super(config, place);
        this.temp = `
        <div class="projects-table-row">
            <div class="col-1">${this.config.year}</div>
            <div class="col-2">${this.config.name}</div>
            <div class="col-3">${this.config.target}</div>
            <div class="col-4">
                ${this.generateSkills()}
            </div>
            <div class="col-5">
                ${this.generateLinks()}
            </div>
        </div>`
        this.renderTemplate();
    }

    renderTemplate() {
        const htmlPlace = document.querySelector(`.${this.place}`);
        htmlPlace.innerHTML += this.temp;
    }

    generateLinks() {
        let linksHTML = [];
        for (let i of this.config.links) {
            linksHTML.push(`
                <div class="link-list">
                    <a href="${i.link}" target="_blank">
                        <div>
                            <div class="col-5-text">${i.name}</div>
                            <div><img class="col-5-link" src="" alt=""></div>
                        </div>
                    </a>
                </div>`)
        }
        return linksHTML.join("");
    }
}

