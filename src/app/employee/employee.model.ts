export interface Employee {
    data: Dataa[];
    meta: Meta;
}

export interface Dataa {
    id:         number;
    attributes: Attributes;
}

export interface Attributes {
    name:        string;
    gender:      string;
    email:       string;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
}

export interface Meta {
}