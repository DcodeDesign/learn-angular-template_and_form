export class Contact {
    constructor(
        public first_name: string,
        public last_name: string,
        public email: string,
        public gender: string,
        public company?: string
    ) { }
}

export const contacts: Contact[] = [
    {
        "first_name": "Manny",
        "last_name": "Henry",
        "email": "mh@gmail.com",
        "gender": "Male",
        "company": "Linkedin"
    },
    {
        "first_name": "Mady",
        "last_name": "Myh",
        "email": "mm@gmail.com",
        "gender": "Female",
        "company": "Linkedin"
    }
    
]

export const company = ['Linkedin', 'Manny Design', 'Apple'];