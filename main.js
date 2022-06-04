// const user2 = {
//     firstname: 'John',
//     lastname: 'Doe',
//     getFullName: function () {
//         return `${this.firstname} ${this.lastname}`;
//     }
// }

// const user = {
//     firstname: 'Agil',
//     lastname: 'Atakishiyev',
//     patronymic: 'Elxan',
//     age: 23
// }

const FIRSTNAME = 'firstname'

// console.log(user.firstname);
// console.log(user[FIRSTNAME]);

// console.log(user.getFullName());

Object.keys(user).forEach(k => {
    // console.log(k);
});

Object.values(user).forEach(v => {
    // console.log(v);
});

Object.keys(user).forEach(k => {
    // console.log('key is ', k, ':', 'value is ', user[k]);
});

Object.entries(user).forEach(entry => {
    //entry : ["key", "value"]
    //Object.entries() => [["key", "value"], ["key", "value"]]
    // console.log(`key is ${entry[0]} : value is ${entry[1]}`);
});

/*
    // Copy object with object.assign
    const userCopy = Object.assign({}, user);

    userCopy.lastname = 'Farizov'

    console.log(userCopy, '-----userCopy');
    console.log(user, '-----user original');
*/

/*
    // create new  object with Object.assign 
    const obj = {
        firstname: 'Erestun'
    }

    const obj2 = {
        firstname: 'Tural',
        lastname: 'Erestunov'
    }

    Object.assign(obj, obj2);
    console.log(obj);
    console.log(obj2);

    const result = {...obj2, ...obj};

*/


/*
    // Object deep copy with spread operator
    const userCopy ={...user}
    userCopy.lastname = 'Farizov'
    console.log(userCopy, '-----userCopy');
    console.log(user, '-----user original');
*/



/*  Difference with freeze and seal
    with freeze we cant  add new properties  we cant  change existing properties 
    with seal we can change existing properties but we can not add new ones

    // Object.freeze(user);

    // if (!Object.isFrozen(user)) {
    //     user.lastname = 'Ata';
    // }
    // user.grandFatherName = 'Abdulali';


    // Object.seal(user);

    // user.firstname = 'Fariz'


    // user.grandFatherName = 'Abdulali';

    // console.log(user);
*/

// Object.defineProperty(user, 'birthdate', { value: '11-11-1999', writable: true});
// user.birthdate = '12-12-1999';
// console.log(user)

// const agil = {
//     lastname: 'Ata',
//     firstname: 'Agil'
// };

// const agil2 = {
//     firstname: 'Agil',
//     lastname: 'Ata'
// };

// if (JSON.stringify(agil) === JSON.stringify(agil2)) {
// console.log('objects are equal')
// }

// const agilCopy  = JSON.parse(JSON.stringify(agil));

// agilCopy.firstname = 'Agil1';
// console.log(agil)
// console.log(agilCopy)

// JSON  - javascript object  notation

// console.log(response);

// const userCopy =  Object.create(user);

// userCopy.firstname = 'Fariz';
// console.log(userCopy);

