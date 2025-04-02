const accountId = 144552
let accountEmail = "arpita04@gmail.com"
var accountPassword = "122345"
accountCity = "Jaipur"
let accountState;

//accountId = 2 //not allowed

accountEmail = "hc@hc.com"
accountPassword = "906475"
accountCity = "Asansol"

console.log(accountId)
/*
prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId , accountEmail, accountPassword, accountCity, accountState])