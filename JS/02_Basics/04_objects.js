//const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = '1234abcd'
tinderUser.name = "Arpi"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "arpita@gmail.com",
    fullname:
    {
        userfullname:{
            firstname: "arptia",
            lastname: "choudhary"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({} , obj1 , obj2 , obj4)

const obj3 = {...obj1, ...obj2}
//console.log(obj3);

const users = [
    {
        id:1,
        email: "arpita.com"
    },
    {
        id:1,
        email: "arpita.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructror: "Arpita"
}

//course.courseInstructror

const{courseInstructror: instructor} = course

//console.log(courseInstructror);
console.log(instructor);

// {
//     "name": "Arpita",
//     "coursename": "js in hindi",
//     "prince": "free"
// }

[
    
]