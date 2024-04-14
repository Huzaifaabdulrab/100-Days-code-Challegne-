// Q21.They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

type person = {
    name: string,
    age: number,
    genderMAle: boolean
};

let person1: person = {
    name: "Huzaifa",
    age: 16,
    genderMAle: true
};

let person2: person = {
    name: "Raza",
    age: 14,
    genderMAle: true
};

let person3: person = {
    name: "Alina",
    age: 15,
    genderMAle: false
};

console.log(person1);
console.log(person2);
console.log(person3);
