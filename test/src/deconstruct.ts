
/**
 * Playground for deconstructors
 * 
 */
interface User {
    firstName: string;
    age: number;
    department?: Department;
    projects?: Project[]
}

interface Department {
    name: string
}
interface Project {
    name: string;
    accountingNumber: string;
}
const user: User = {
    firstName: 'Sebastian',
    age: 45,
    department: { name: 'IT' },
    projects: [
        { name: 'Project A', accountingNumber: '123' },
        { name: 'Project B', accountingNumber: '312' },
        
    ]
}

const { firstName, age }: User = user;

console.log(firstName);
console.log(age);
