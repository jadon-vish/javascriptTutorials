// Primitive and non-pprimitive datatypes

// __PRIMITVE DATATYPES____ => Call by value (a copy of this data will be given not original reference)
//7 types -> String,Number,Boolean, Null,Undefined,Symbol,BigInt

//JS is dynamically types lang / we dont need to define the datatype serperately

const score=100;
const scoreVal=100.3;

const isLoggedIn=true;
const outsideTemp=null;
let userEmail="some@sd.com";

const id=Symbol('123');
const anotherId=Symbol('123');

const bigNum=234242354534534534535n;

//REFERENCE/ NON-PRIMITIVE -> direct reference will be giver - > Array,Objects,Functions
//return type will be object only
const heroes=['shaktiman','nagraaj','hatim'];

const myObj={
    name:'Vishesh',
    age:26,
}

const myFunc=function(){
    console.log('Hello world');
}

console.log(typeof heroes);
