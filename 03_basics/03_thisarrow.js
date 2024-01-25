const user={
    username:"Vishesh",
    price:99,
    welcomeMessage:function(){
        console.log(`welcome , ${this.username}`);
        console.log(this);
    }
}
// user.username="Himesh";

//user.welcomeMessage();

//console.log(this); -> this refers to empty object in node env , but in browser it refers to windows object

//this does'nt work in function , only in object context
// function chai(){
//     let username="Hitesh";
//     console.log(this);//many fields
// }

// chai();

//Arrow function:

// const chai=()=>{
//      let username="Hitesh";
//      console.log(this);//empty object
// }

// chai();

// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }

//---Implicit return--- no use of {} & return statement

//const addTwo=(num1,num2)=> num1+num2; //no use of return statement

const addTwo=(num1,num2)=> ({username:"Vishesh"});//use () to return object


console.log(addTwo(3,4));
