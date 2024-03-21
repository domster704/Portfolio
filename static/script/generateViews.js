class Template {
    /**
     * Initializes a new instance of the constructor.
     *
     * @param {type} config - the configuration for the constructor
     * @param {type} place - the place for the constructor
     */
    constructor(config, place) {
        this.config = config;
        this.place = place;
        this.temp = '';
    }

    /**
     * Renders the template by inserting it into the specified HTML element.
     *
     * @returns {undefined} This function does not return a value.
     */
    renderTemplate() {
        // Select the HTML element to insert the template into
        const htmlPlace = document.querySelector(`.${this.place}`);
        // Insert the template into the HTML element
        htmlPlace.innerHTML = htmlPlace.innerHTML + this.temp;
    }

    /**
     * Generates the sub-position HTML elements based on the configuration.
     *
     * @return {string} The HTML string of the sub-position elements.
     */
    generateSubPosition() {
        let subPositionElements = this.config.subPosition.map(i => `<div>${i}</div>`);
        return subPositionElements.join("");
    }

    /**
     * Generates HTML for skills.
     *
     * @returns {string} - The generated HTML for skills.
     */
    generateSkills() {
        let skillsHTML = [];

        // Iterate over the skills in the config and generate HTML for each skill
        for (let skill of this.config.skills) {
            skillsHTML.push(`<div class="main-job-place-list-element-skill">${skill}</div>`);
        }

        // Join the generated HTML for skills into a single string
        return skillsHTML.join("");
    }
}

class TemplateJob extends Template {
    /**
     * Constructs a new instance of the class.
     *
     * @param {Object} config - the configuration object
     * @param {string} place - the place value
     */
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
                            <div class="main-job-place-list-element-block-header-link-default"><img class="main-job-place-list-element-block-header-link" src="/static/res/image/svg/link.svg" alt=""></div>
                            <div class="main-job-place-list-element-block-header-link-hover"><img class="main-job-place-list-element-block-header-link" src="/static/res/image/svg/link_blue.svg" alt=""></div>
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
    /**
     * Constructor for the class.
     *
     * @param {config} config - the configuration object
     * @param {place} place - the place object
     * @return {undefined}
     */
    constructor(config, place) {
        super(config, place);
        this.temp = `
        <div class="main-job-place-list-element">
            <div class="main-job-place-list-element-header main-job-place-list-element-header-image-desk">
                <div class="main-job-place-list-element-image-block">
                    <a href="${this.config.image}" target="blank">
                        <img class="main-job-place-list-element-image" src="${this.config.image}" alt="">
                    </a>
                </div>
            </div>
            <a href="${this.config.projectURL}" target="blank">
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
                <div class="main-job-place-list-element-header main-job-place-list-element-header-image-mobile">
                    <div class="main-job-place-list-element-image-block">
                        <img class="main-job-place-list-element-image" src="${this.config.image}" alt="">
                    </div>
                </div>
            </a>
        </div>`
        this.renderTemplate();
    }
}

class TemplateAllProject extends Template {
    /**
     * A constructor function that initializes an object with the given configuration
     * and place.
     *
     * @param {config} config - The configuration object.
     * @param {place} place - The place object.
     */
    constructor(config, place) {
        super(config, place);
        this.temp = `
        <div class="projects-table-row">
            <div class="col-1">${this.config.year}</div>
            <div class="col-2 col-2-desk">${this.config.name}</div>
            <div class="col-2-new">
                <a href="${this.config.links[0].link}">
                    <div class="col-2 col-2-mobile">
                        <div>${this.config.name}</div>
                        <div><img class="col-5-link" src="/static/res/image/svg/link.svg" alt=""></div>
                    </div>
                </a>
            </div>
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

    /**
     * Renders the template by appending it to the HTML element with the class name
     * specified by the 'place' property.
     *
     * @return {undefined} The generated HTML for the links.
     */
    renderTemplate() {
        const htmlPlace = document.querySelector(`.${this.place}`);
        htmlPlace.innerHTML += this.temp;
    }

    /**
     * Generates the links HTML for the given configuration.
     *
     * @return {string} The generated HTML for the links.
     */
    generateLinks() {
        let linksHTML = [];
        for (let i of this.config.links) {
            linksHTML.push(`
                <div class="link-element">
                    <a href="${i.link}" target="_blank">
                        <div>
                            <div class="col-5-text">${i.name}</div>
                            <div class="link-element-default"><img class="col-5-link" src="/static/res/image/svg/link_gray.svg" alt=""></div>
                            <div class="link-element-hover"><img class="col-5-link" src="/static/res/image/svg/link_blue.svg" alt=""></div>
                        </div>
                    </a>
                </div>`)
        }
        return linksHTML.join("");
    }
}

