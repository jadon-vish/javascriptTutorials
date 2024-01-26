const temperature=41;

// if(temperature == 40){
//     console.log('less than 50');
// }
// else{
//     console.log('greates than 50');
// }

// < , > , >= , <= , == , === ,!==

// const score = 200;

// if(score > 100){
//     let power = "fly";
//     console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`);

const balance = 1000;

// if(balance > 500 ) console.log('test');

// if(balance < 500){
//     console.log('less than 500');
// }
// else if(balance <750){
//     console.log('less than 750');
// }
// else if(balance < 900){
//     console.log('less than 900');
// }
// else{
//     console.log('less thank 1200');
// }

const userLoggedIn=true;
const debitCard=true;
const loggedInFromGoogle=false;
const loggedInFromEmail=true;


if(userLoggedIn && debitCard){
    console.log('you can do your shopping');
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log('user logged in');
}
