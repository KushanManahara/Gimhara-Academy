// Define interface for Subject
export interface Subject {
    id: number;
    name: string;
    imageSrc: string;
    imageAlt: string;
}

// Define interface for Subject Category
export interface SubjectCategory {
    category: string;
    subjects: Subject[];
}
