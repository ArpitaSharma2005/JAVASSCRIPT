

function sayMyName(){
    console.log("A");
    console.log("R");
    console.log("P");
    console.log("I");
    console.log("T");
    console.log("A");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
    
// }

function addTwoNumbers(number1, number2){
   
    // let result = number1 + number2
    // return result
    return number1 + number2

}

const result = addTwoNumbers(3,8)

// console.log("Result: ", result);

function loginUserMessage(username = "Sam"){
    if(!username){
        console.log("Please enter a username");
        return 
        
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Arpita"));
// console.log(loginUserMessage("Arpita"));

function calculateCartPrice(val1 , val2 , ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "Arpita", 
    price: 1999
}

function handelObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handelObject(user)
handelObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));

