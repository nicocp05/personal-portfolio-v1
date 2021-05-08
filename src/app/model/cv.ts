import { CurriculumStructure } from "../interfaces/curriculum-structure";

export const curriculum: CurriculumStructure = 
    {
        personal: {
            name: "Nicolás Comisso",
            profile: "Full-stack JavaScript Developer",
            location: "Buenos Aires, Argentina"
        },
        skills: [
            "Solido conocimiento de HTML, CSS y Javascript",
            "Experiencia en el front end utilizando herramientas y librerias tales como Bootstrap, Animate.css, FontAwesome, entre otras",
            "Experiencia en el back end utilizando Node.js, Express, REST, JWT entre otras",
            "Desarrollo de aplicaciones web con Angular Framework",
            "Conocimiento webpack como herramienta de empaquetador de modulos"
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
                description: "Trabaje con un equipo de desarrolladores en una aplicacion web para administrar consorcios utilizando en el Front End Angular Framework y en el Back End Node.js con Typescript, ademas de otras herramientas y librerias tales como Sweetalert2, Bootstrap, JWT, FontAwesome entre otras."
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