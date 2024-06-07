const accountId = 144556
let accountEmail = "abcd@gmail.com"
var accountPassword = "123456"
accountCity = "Ahmedabad"
let accountState; // if not assigned any value will print undefined

// accountId = 2; //not allowed

accountEmail = "sujal@gmail.com"
accountPassword = "123"
accountCity = "Baroda"

console.log(accountId);

/*
prefer not use var
because of functional and gloabal scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])