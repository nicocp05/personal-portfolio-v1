export interface DataStructure {
    header: Header;
    skills: Skill[];
}

export interface Header {
    name:    string;
    profile: string;
}

export interface Skill {
    title:     string;
    classIcon: string;
    style:     string;
}
