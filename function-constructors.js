// const user2 = {
//   firstname: "John",
//   lastname: "Doe",
//   patronymic: "Johnatan",
//   getFullName: function () {
//     return `${this.firstname} ${this.lastname}`;
//   },
// };

// const user = {
//   firstname: "Agil",
//   lastname: "Atakishiyev",
//   patronymic: "Elkhan",
//   getFullName: function () {
//     return `${this.firstname} ${this.lastname}`;
//   },
// };

// const user3 = {
//   firstname: "Agil",
//   lastname: "Atakishiyev",
//   patronymic: "Elkhan",
//   getFullName: function () {
//     return `${this.firstname} ${this.lastname}`;
//   },
// };

// Function Constructors
// function User (_firstname, _lastname, _patronymic) {
//     this.firstname = _firstname;
//     this.lastname = _lastname;
//     this.patronymic = _patronymic;
//     this.age = 30;

//     this.getFullName = function () {
//         return `${this.firstname} ${this.lastname}`;
//     }
// }

// const user = new User('Tural', 'Suleymanli', 'Elnur');

// const user2 = new User('Talish', 'Suleymanli', 'Elnur');
// const user3 = new User('Agil', 'Atakishiyev', 'Elxan');

// console.log(user.getFullName());

// class User {
//     constructor(firstname, lastname, patronymic) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.patronymic = patronymic;
//     }

//     getFullName () {
//         return `${this.firstname} ${this.lastname}`;
//     }

//     static myType () {
//         return 'I am a User'
//     }
// }

// const user = new User('Suraj', 'Is my love', 'Cavid');
// console.log(User.myType());

class Person {
    constructor(firstname, surname, patronymic, birthdate, gender) {
        this.firstname = firstname;
        this.surname = surname;
        this.patronymic = patronymic;
        this.birthdate = birthdate;
        this.created_at = new Date();
        this.gender = gender;
    }

    getFullName () {
        return `${this.firstname} ${this.surname}`;
    }

    getAge () {
        const dateObject = new Date(this.birthdate);
        return 2021 - dateObject.getFullYear();
    }

    getFullInfo () {
        return `This person's name is ${this.getFullName()}. This persons age is ${this.getAge()}. This user was created at ${this.created_at.toString()}`
    }

    toString () {
        return this.getFullInfo();
    }

    static myType () {
        return 'I am Person';
    }
}

// class Man extends Person {
//     constructor (hasBeard, surname, firstname, patronymic, birthdate) {
//         super(firstname, surname, patronymic, birthdate, 'male');
//         this.hasBeard = hasBeard;
//     }

//     getInfoAboutBeard () {
//         return `${this.hasBeard ? 'this person has beard' : 'this person does not have beard'}`
//     }
// }

// class Woman extends Person {
//     constructor (surname, firstname, patronymic, birthdate) {
//         super(firstname, surname, patronymic, birthdate, 'female');
//     }
// }

// const manInstance = new Man(false, 'Ismayilov', 'Suraj', 'Cavid', '08-11-1999');

// console.log(manInstance.getFullInfo());
// console.log(manInstance.getInfoAboutBeard());


class MyArrayType extends Array {
    constructor() {
        super(...arguments);
    }
    findMax () {
        let currentMax = this[0];
        for (let i = 0; i < this.length; i++) {
            const element = this[i];
            // currentMax = currentMax < element ? element : currentMax;
            if(currentMax < element) {
                currentMax = element;
            }
        }
        return currentMax;
    }
}

const arr = new MyArrayType(1,2,3,4,5,6);

console.log(arr.findMax());


Math.max(2,34,5,6,325,353);
// 353

const number = new CustomMath(100);

const result = number.minus(30).plus(50).multiply(3).divide(5);
