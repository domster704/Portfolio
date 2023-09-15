const JOV_VIEWS = {
    htmlPlace: "main-job-place-list",
    list: [{
        date: "сентябрь 2021 — апрель 2023",
        position: "Android-developer&nbsp;·&nbsp;",
        subPosition: ["Middle Engineer"],
        companyName: "Янтарь+",
        companyURL: "https://amberizh.ru/",
        about: "Разработка мобильного сервиса по оформлению заказов для торговых представителей, просмотру своей статистики и задолженности. " +
            "<br> Улучшил интерфейс программы, ускорил работу алгоритмов более чем в 2.5 раза, оптимизировал SQL-запросы",
        skills: ["Android", "Java", "MySQL", "XML", "FTP", "DBF"]
    }, {
        date: "июнь — июль 2023",
        position: "Full-stack developer&nbsp;·&nbsp;",
        subPosition: ["Junior Engineer"],
        companyName: "ПРОНЕТКОМ",
        companyURL: "https://pronetcom.ru/",
        about: "Поддержание существующего проекта, code-reviewing, написание SQL-запросов, мобильная разработка.<br> Ускорил многие SQL-запросы в среднем на 40%.",
        skills: ["JavaScript", "HTML", "CSS", "Cordova", "SVN", "PostgreSQL", "Node.js", "RESTful", "SFA системы"]
    }].reverse()
}

const PROJECT_VIEWS = {
    htmlPlace: "main-project-list",
    list: [{
        image: "res/image/AndroidApp.png",
        projectName: "Онлайн-магазин на Android",
        subPosition: [],
        projectURL: "https://github.com/domster704/MARS-work",
        about: "Онлайн-магазин для ограниченного круга лиц в сфере косметики и парфюмерии, написанный на Java с помощью AndroidAPI.",
        skills: ["Android", "Java", "MySQL", "XML", "FTP", "DBF"]
    }, {
        image: "res/image/YandexGoTest.png",
        projectName: "Тестовое задание для YandexGo",
        subPosition: [],
        projectURL: "https://domster704.github.io/YandexTestTaskReact/",
        about: "Тестовое задание в виде верстки для Yandex Crowd",
        skills: ["ReactJS", "JavaScript", "WebPack5", "Babel", "HTML", "CSS"]
    }, {
        image: "res/image/siteSQB.png",
        projectName: "Кредит онлайн на карту",
        subPosition: [],
        projectURL: "https://domster704.github.io/CreditOnline_SQB_FrontEnd/",
        about: "Веб-страница для компании, занимающейся кредитами.",
        skills: ["HTML", "CSS", "JavaScript", "AdaptiveDesign"]
    }, {
        image: "res/image/RehabCenter.png",
        projectName: "Реабилитационный центр",
        subPosition: [],
        projectURL: "https://domster704.github.io/RehabCenter_FrontEnd/",
        about: "Веб-страница для реабилитационного центра.",
        skills: ["HTML", "CSS", "JavaScript", "AdaptiveDesign"]
    }, {
        image: "res/image/LCT.png",
        projectName: "Расчет стоимости недвижимости",
        subPosition: [],
        projectURL: "https://github.com/domster704/flaskLCT",
        about: "Сервис автоматизирует процесс расчета стоимости квартир и позволяет ускорить процедуру выдачи экспертных заключений о стоимости квартир и избежать сделок, при которых имущество продается по цене ниже рыночной.",
        skills: ["Python", "Flask", "JWT-token", "YandexAPI", "Flutter", "HTML", "SQL"]
    }, {
        image: "res/image/PBS.png",
        projectName: "PolarBearSearch",
        subPosition: [],
        projectURL: "https://github.com/domster704/PolarBearServer",
        about: "Приложение по поиску белых медведей в Арктике по снимкам с самолёта.",
        skills: ["Python", "Flask", "OpenCV", "C#", "Windows Forms"]
    }].reverse()
}

const ALL_PROJECTS_VIEWS = {
    htmlPlace: "projects-table",
    list: [{
        year: 2023,
        name: "Тестовое задание для YandexGo",
        target: "ООО \"ЯНДЕКС КРАУД\"",
        skills: ["ReactJS", "JavaScript", "WebPack5", "Babel", "HTML", "CSS", "Adaptive design"],
        links: [{
            name: "GitHub",
            link: "https://github.com/domster704/YandexTestTaskReact"
        }, {
            name: "WebSite",
            link: "https://domster704.github.io/YandexTestTaskReact/"
        }, {
            name: "Figma",
            link: "https://www.figma.com/file/CcNXFQa0aSxk1Pdw1P0IZ8/go-scooter-pass?node-id=0%3A1&mode=dev"
        }]
    }, {
        year: 2023,
        name: "Филлворд на React",
        target: "Pet-project",
        skills: ["ReactJS", "Redux/Toolkit", "Webpack5", "Babel", "HTML", "CSS", "JavaScript"],
        links: [{
            name: "GitHub",
            link: "https://github.com/domster704/FillWordReactJS"
        }, {
            name: "WebSite",
            link: "https://domster704.github.io/FillWordReactJS/"
        }]
    }, {
        year: 2023,
        name: "Верстка “Кредит онлайн на карту”",
        target: "ITConstruct",
        skills: ["HTML", "CSS", "JavaScript", "Adaptive design"],
        links: [{
            name: "GitHub",
            link: "https://github.com/domster704/CreditOnline_SQB_FrontEnd"
        }, {
            name: "WebSite",
            link: "https://domster704.github.io/CreditOnline_SQB_FrontEnd/"
        }, {
            name: "Figma",
            link: "https://www.figma.com/file/vA01M8jr3EJxuiOxoVCfuW/CreditOnlineQSB?type=design&node-id=0-1&mode=design&t=0BLjfRxdmciGTTbs-0"
        }]
    }, {
        year: 2023,
        name: "Верстка “Реабилитационный центр”",
        target: "ITConstruct",
        skills: ["HTML", "CSS", "JavaScript", "AdaptiveDesign"],
        links: [{
            name: "GitHub",
            link: "https://github.com/domster704/RehabCenter_FrontEnd"
        }, {
            name: "WebSite",
            link: "https://domster704.github.io/RehabCenter_FrontEnd/"
        }, {
            name: "Figma",
            link: "https://www.figma.com/file/w09wpKUB0tgmN1yB4C0UiK/RecoverCenter?type=design&node-id=1-3&mode=design"
        }]
    }, {
        year: "2021 - 2023",
        name: "Онлайн-магазин на Android",
        target: "Янтарь+",
        skills: ["Android", "Java", "MySQL", "XML", "FTP", "DBF"],
        links: [{
            name: "GitHub",
            link: "https://github.com/domster704/MARS-work"
        }]
    }, {
        year: 2022,
        name: "Расчет стоимости недвижимости в Москве",
        target: "ЛЦТ",
        skills: ["Python", "Flask", "JWT-token", "YandexAPI", "Flutter", "HTML", "SQL"],
        links: [{
            name: "GitHub",
            link: "https://github.com/domster704/flaskLCT"
        }, {
            name: "Documentation",
            link: "https://docs.google.com/document/d/1HpV5P3-jPuAqcvheBeXZuVYLP_j4Lgj5FY8Zawyhgn4/edit#heading=h.1w2u5joy8ub6"
        }]
    }, {
        year: 2021,
        name: "PolarBearSearch",
        target: "Цифровой прорыв",
        skills: ["Python", "Flask", "OpenCV", "C#", "Windows Forms"],
        links: [{
            name: "Web-server",
            link: "https://github.com/domster704/PolarBearServer"
        }, {
            name: "Windows App",
            link: "https://github.com/nikitakaralius/polar-bear-search"
        }, {
            name: "Presentation",
            link: "https://docs.google.com/presentation/d/1W6TYky-1J5u0NYLySvSMae3_9TNV22Un0rMTcUU4gtM/edit?usp=sharing"
        }]
    }, {
        year: 2021,
        name: "VR-визуализация каталитического крекинга",
        target: "ПАО Роснефть",
        skills: ["Unity", "C#", "SteamVR"],
        links: [{
            name: "GitHub",
            link: "https://github.com/domster704/KK"
        }, {
            name: "Video",
            link: "https://drive.google.com/file/d/1qvcbCWMlOofYf0SUGdOZUqAYU1gTqj_1/view?usp=sharing"
        }]
    }, {
        year: 2021,
        name: "WebServerGeneration",
        target: "Pet-project",
        skills: ["HTML", "CSS", "JavaScript", "Bootstrap 5", "Python", "Flask", "SQLAlchemy"],
        links: [{
            name: "GitHub",
            link: "https://github.com/domster704/WebServerGeneration"
        }]
    }, {
        year: 2021,
        name: "Игра-клон Osu",
        target: "Pet-project",
        skills: ["HTML", "JavaScript", "Canvas2D"],
        links: [{
            name: "GitHub",
            link: "https://github.com/domster704/Osu"
        }]
    }]
}