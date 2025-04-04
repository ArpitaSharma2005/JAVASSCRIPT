// singleton

// object literals

// Object.create

const mySym = Symbol("key1")

const JsUser = {
    name: "Arpita",
    "full name": "Arpita Sharma",
    [mySym]: "mykey1",
    age: 18,
    location: "jaipur",
    email: "Arpita@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "arpita@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "arpita@google.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
    
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());