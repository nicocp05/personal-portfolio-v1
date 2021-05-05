

export interface CurriculumStructure {
    personal:   Personal;
    skills:     string[];
    experience: Experience[];
    education:  Education[];
}

export interface Education {
    university: string;
    career:     string;
    location:   string;
    begin:      string;
}

export interface Experience {
    profile:  string;
    company:  string;
    location: string;
    from:     string;
    to:       string;
    used:     string[];
}

export interface Personal {
    name:    string;
    profile: string;
}
