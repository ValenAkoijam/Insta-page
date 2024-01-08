export interface EmployeeView {
    data: Data;
    meta: Meta;
}

export interface Data {
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