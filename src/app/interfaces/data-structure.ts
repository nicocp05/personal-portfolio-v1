export interface DataStructure {
    navbarItems: NavbarItems[]
    header: Header;
    skills: Skill[];
    portfolio: Portfolio[]
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
}

export interface Skill {
    title:     string;
    classIcon: string;
    style:     string;
}
