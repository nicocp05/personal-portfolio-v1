import { DataStructure } from "../interfaces/data-structure";

export const data: DataStructure = 
    {
        navbarItems: [
            {
                name: "Work",
                link: "#portfolio"
            },
            {
                name: "Experience",
                link: "#experience"
            },
            {
                name: "Skills",
                link: "#skills"
            },
            {
                name: "Contact",
                link: "#contact"
            }
        ],
        header: {
            name: "Nicolás Comisso",
            profile: "Full-stack JavaScript Developer"
        },
        portfolio: [
            {
                name: "SUMI",
                img: "assets/sumi-image.jpg",
                usedList: ["Angular", "Node.js", "JWT", "Typescript", "SweetAlert2"],
                description: "SUMI is a web application to manage condominiums, It's developed using Angular, SweetAlert2, Bootstrap and Syncfusion. The API REST it's developed using Node.js, Express, Typescript and JWT."
            },
            {
                name: "MoviesApp",
                img: "assets/movies-image.jpg",
                usedList: ["Angular", "The Movie DB API", "Bootstrap", "Animate.css"],
                description: "MoviesApp is an application to watch the most recent movies and with an input to search for other movies. It's developed using Angular, Bootstrap, Animate.css and The MovieDB API."
            },
            {
                name: "YoutubeApp",
                img: "assets/youtube-image.png",
                usedList: ["Angular", "Youtube API", "SweetAlert2", "Bootstrap", "Animate.css"],
                description: "YoutubeApp is an application to watch the latest videos from Google's Youtube channel. It's developed using Angular, SweetAlert2, Bootstrap, Animate.css and The Youtube API."
            }
        ],
        experience: [
            {
                name: "UNE Consulting",
                img: "assets/une-image.png"
            }
        ],
        skills: [
            {
                title: "HTML5",
                classIcon: "fab fa-html5 fa-7x",
                style: "color: #E95E28"
            },
            {
                title: "CSS3",
                classIcon: "fab fa-css3-alt fa-7x",
                style: "color: #0091CA"
            },
            {
                title: "JavaScript",
                classIcon: "fab fa-js-square fa-7x",
                style: "color: #F7D800"
            },
            {
                title: "Angular",
                classIcon: "fab fa-angular fa-7x",
                style: "color: #D6002F"
            },
            {
                title: "Node.js",
                classIcon: "fab fa-node-js fa-7x",
                style: "color: #7CB701"
            },
            {
                title: "Git",
                classIcon: "fab fa-git-alt fa-7x",
                style: "color: #F74C20"
            }
        ],
        contact: [
            {
                name: "GitHub",
                link: "https://github.com/nicocp05",
                classIcon: "fab fa-github fa-2x"
            },
            {
                name: "LinkedIn",
                link: "https://www.linkedin.com/in/nicolas-comisso-paz/",
                classIcon: "fab fa-linkedin fa-2x"
            },
            {
                name: "Mail",
                link: "mailto:nico.comisso@gmail.com",
                classIcon: "fas fa-envelope fa-2x"
            },
            {
                name: "Instagram",
                link: "https://www.instagram.com/nicocp05/",
                classIcon: "fab fa-instagram fa-2x"
            },
        ]
    }
