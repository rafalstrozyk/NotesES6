// let and const

// const make error
let myName = 'Rafael';
console.log(myName);

myName = 'Deny';
console.log(myName);

//Arrow functions
const myFnc = () => {
    
}
// No more issues whit the 'this' keyword

const printMyName = name => {
    console.log(name);
}
printMyName(myName);

const multiply = (number) => {
    return number * 2;
}

const multiply = number => number * 2;
console.log(multiply(2));

// Classes

class Human {
    constructor() {
        this.gender = 'male';
    }

    printGender() {
        console.log(this.gender);
    }
}

class Person extends Human {
    constructor() {
        super();
        this.name = 'Max';
        this.gender = 'female';
    }

    printMyName() {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();

// Classes, Propertis & Methods
// ES7

class Human {
    gender = 'male';

    printGender = () => console.log(this.gender); 
}

class Person extends Human {
    name = 'Max';
    gender = 'female';

    printMyName = () => console.log(this.name);
}

const person = new Person();
person.printMyName();
person.printGender();

// Spread & Rest Operators

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log(newNumbers);

const person = {
    name: 'Max',
};

const newPerson = {
    ...person,
    age: 28
};

console.log(newPerson);

const filter = (...args) => {
    return args.filter(el => el === 1);
};

console.log(filter(1, 2, 3)); // 1
console.log(filter(3, 2, 1)); // 1

// Destructuring

const numbers = [1, 2, 3];
[num1, num2] = numbers;
console.log(num1, num2); //1 2

[num1, ,num3] = numbers;
console.log(num1, num3); //1 3

// Reference and Primitive Types Refresher
const number = 1;
const num2 = number; // copy
console.log(num2);

const person = {
    name: 'Max'
};

// const secondPerson = person; // its not a copy

// copy
const secondPerson = {
    ...person
};

person.name = 'Leon';
console.log(secondPerson);

// Refreshing Array Functions

const numbers = [1, 2, 3];

const doubleNumArray = numbers.map((num) => {
    return num * 2;
});

console.log(numbers);
console.log(doubleNumArray);