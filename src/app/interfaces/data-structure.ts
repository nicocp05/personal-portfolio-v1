export interface DataStructure {
    navbarItems: NavbarItems[]
    header: Header;
    skills: Skill[];
    portfolio: Portfolio[],
    experience: Experience[],
    contact: Contact[],
    about: string
}

export interface NavbarItems {
    name:    string;
    link:    string;
}

export interface Header {
    name:    string;
    profile: string;
}

export interface Portfolio {
    name:    string;
    img:     string;
    usedList: string[];
    description: string;
    link: string;
    repositoryLink: string;
}

export interface Experience {
    name:    string;
    img:     string;
}


export interface Skill {
    title:     string;
    classIcon: string;
    style:     string;
}

export interface Contact {
    name:       string;
    link:       string;
    classIcon:  string;
}
