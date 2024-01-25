//singleton - if made by constructor not by literal
//Object.create()

//Literal

const mySum=Symbol('key1');

const jsUser={
    name:"Vishesh",
    "full name":"Vishesh Jadon",
    [mySum]:"mykey1",
    email:"vishesh@google.com",
    isLoggedIn:false,
    lastLoginDays:['Monday','wednesday'],
}
// console.log(jsUser['email']);
// console.log(jsUser['full name']);
// console.log(jsUser[mySum]);

//overwrite the values

jsUser.email="visheshj@google.com";

//to lock values - non changeable - freeze

//Object.freeze(jsUser);

jsUser.email="visheshj@apple.com";

jsUser.greeting=function(){
    console.log("Hello user");
}

jsUser.greetingTwo=function(){
    console.log(`Hello user ${this["full name"]}`);
}

//console.log(jsUser.greetingTwo());


//######################

const tinderUser= new Object();
tinderUser.id="123RRR";
tinderUser.name="Vishu";
tinderUser.isLoggedIn=false;

//console.log(tinderUser);
//any level of nesting is allowed
const regularUser={
    email:"some@gmail.com",
    fullname:{
       userfullname:{
        firstname:"Virat",
        lastname:"kohli",
       }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

//combining objects

const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};

const obj3={...obj1,...obj2} // mostly used

//const obj3=Object.assign({},obj1,obj2)

//console.log(obj3);

//array of objects

const allusers=[
    {mane:"rick",age:12},
    {name:"john",age:34},
    {name:"peter",age:30},
    {name:"henry",age:23},
    {name:"josh",age:20},
    {name:"david",age:43},
]

// allusers[3].age

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));//key calue pairs to array
//console.log(tinderUser.hasOwnProperty('id'));


//------------Destructuring------

const course={
    coursename:"javascript",
    price:"499",
    courseinstructor:"Vishesh",
    duration:"5 months",
}

const {coursename:cname,courseinstructor:instructor}=course
//console.log(cname,instructor);



//--------JSON-----------

// {
//     "name":"Vishesh",
//     "course":"Javascript mastery",
//     "price":"free"
// }