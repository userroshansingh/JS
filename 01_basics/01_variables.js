const accountId = 250307
let accountEmail = "roshan@gmail.com"
var accountPassword = "12345"
accountCity = "Mumbai"

// accountId = 2 not allowed because declared const previously

console.log(accountId);

accountEmail = "rds@gmail.com"
accountPassword = "98765"
accountCity = "Gurgaon"


console.table([accountId, accountEmail, accountPassword, accountCity])

// prefer not to use var 
// because of issue in block scope and functional scope