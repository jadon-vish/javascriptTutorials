const accountId=12345;
let accountMail="abc@mc.com";
var accountPassword="1212121";
accountCity="Gwalior";

//accountId=43433; //Cannot reassign const value
accountMail="VJ@gmail.com";
accountPassword="0101010";
accountCity="Indore";
let accountState;//undefined

/*
Prefer not to use Var.
Mostly let & const is used due to block & functional scope
*/

console.table([accountId,accountMail,accountPassword,accountCity,accountState]);