import { CurriculumStructure } from "../interfaces/curriculum-structure";

export const curriculum: CurriculumStructure = 
    {
        personal: {
            name: "Nicolás Comisso",
            profile: "Full-stack JavaScript Developer",
            location: "Buenos Aires, Argentina"
        },
        skills: [
            "Strong HTML, CSS and Javascript foundations.",
            "Front-end experience using tools and libraries such as Bootstrap, Animate.css, FontAwesome and Material Design.",
            "Back-end experience using Node.js, Express, API REST and JWT.",
            "Single page application development with Angular Framework, and basic knowledge of React.",
            "Knowledge of webpack as a module bundler."
        ],
        experience: [
            {
                profile: "Full-stack JavaScript Developer",
                company: "UNE Consulting SRL",
                location: "Buenos Aires, Argentina",
                from: "March 2020",
                to: "September 2020",
                used: [
                    "Angular",
                    "Node.js"
                ],
                description: "I worked with a team of developers in a web application to manage condominium using Angular Framework in Front-end and Node.js with Typescript in Back-end, as well as other tools and libraries such as Sweetalert2, Bootstrap, JWT, FontAwesome, Angular Material."
            }
        ],
        education: [
            {
                university: "Universidad de Morón",
                career: "Computer Engineering",
                location: "Morón, Buenos Aires",
                from: "2019",
                to: "present"
            }
        ]
    }