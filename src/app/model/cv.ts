import { CurriculumStructure } from "../interfaces/curriculum-structure";

export const curriculum: CurriculumStructure = 
    {
        personal: {
            name: "Nicolás Comisso",
            profile: "Full-stack JavaScript Developer",
            location: "Buenos Aires, Argentina"
        },
        skills: [
            "HTML, CSS and Javascript foundations.",
            "Front-end experience using tools and libraries such as Bootstrap, Animate.css and FontAwesome.",
            "Back-end experience using Node.js.",
            "Single page application development with Angular Framework, and basic knowledge of React."
        ],
        experience: [
            {
                profile: "Full-stack JavaScript Developer",
                company: "Allfunds",
                location: "Valencia, España",
                from: "July 2022",
                to: "Currently",
                used: [
                    "Angular.js",
                    "Node.js"
                ],
                description: "I work on a portfolio management web application using angular.js and node.js"
            },
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