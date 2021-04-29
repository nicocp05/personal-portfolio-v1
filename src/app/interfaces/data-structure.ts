export interface DataStructure {
    header: Header;
    skills: Skill[];
    portfolio: Portfolio[]
}

export interface Header {
    name:    string;
    profile: string;
}

export interface Portfolio {
    name:    string;
    img: string;
}

export interface Skill {
    title:     string;
    classIcon: string;
    style:     string;
}
