const account_Id = 1251
let account_Email = "jaissunny07@gmail.com"
var account_Password = "12345"
account_City = "Kathmandu"

// account_Id = 1 can't be changed because of const
/*
prefer not to use var because of block and functional scope user let instead
*/


console.log(account_Email)
console.table([account_Email, account_Id, account_Password])