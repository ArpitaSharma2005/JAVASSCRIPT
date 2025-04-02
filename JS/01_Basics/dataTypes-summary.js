// Premitive

// 7 type: String, Number, Boolean, null, undefined, Sumbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsiderTemp = null
let userEmail;

// const id = symbol('123')
// const anotherId = symbol('123')

// console.log(id === anotherId);

const bigNumber = 3452436527937438n

const heros = ["Shaktiman", "naagraj", "doga"]
let myObj ={
    name: "Arpita",
    age: 19,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);
console.log(typeof myFunction); // function
console.log(typeof heros); // object
console.log(typeof myObj); // object

// Reference (Non primitive)

// Array, Objects, Functions

// https://262.ecma-international.org/5.1/#sec-11.4.3


//*************************************************************

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "Arpitasharmayt"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ubl"
}

let userTwo = userOne

userTwo.email = "arpita@google.com"
console.log(userOne.email);
console.log(userTwo.email);




