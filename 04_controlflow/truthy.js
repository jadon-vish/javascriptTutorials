const userEmail=[];

// if(userEmail){
//     console.log(userEmail);
// }
// else{
//     console.log('no email found');
// }

//falsy values: false, 0, -0, bigint 0 ,"",null,undefined,Nan

//truthy values: "0" , "false" , " " , [] , {}, function(){}

// if(userEmail.length === 0){
//     console.log('array is empty');
// }

// const emptyObj={}

// if(Object.keys(emptyObj).length===0){
//     console.log('object is empty');
// }

//Nullish Coalescing operator (??): null undefined

let val1;
//val1 = 5 ?? 10;   -  5
//val1= null ?? 10;  - 10
//val1=undefined ?? 10;  - 10

// console.log(val1);

//  ternary operator
const price=100;
price >120 ? console.log('greater than 120'):console.log('less than 120');
