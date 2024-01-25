function display(){
    console.log("hello world");
}

//bundled whole code 

// function addTwoNumbers(number1,number2){ //parameters
//     console.log(number1+number2);
// }

function addTwoNumbers(number1,number2){ //parameters
    return number1+number2;
}

//const result=addTwoNumbers(2,4); //arguments

//console.log(result);


function loginUserMessage(username){
    if(username === undefined){
        return 'not a valid username'        
    }
    else{
        return `${username} just logged in`
    }
    
}

const loginmsg=loginUserMessage('asda');
//console.log(loginmsg);

//for unknown number of arguments - rest operator

function calculateCartValue(num2,num3,...num1){
    return num1
}

//console.log(calculateCartValue(100,200,300,400));

//passing the object as an argument

const user={
    name:"Vishesh",
    age:"26",
}

function handleObject(anyObject){
    console.log(`Hi ${anyObject.name} , your age: ${anyObject.age}`)
}

// handleObject({
//     name:"Vishesh",
//     age:"26",
// });

const myarr=[100,300,500,600];

function returnsecondvalue(getArr){
    return getArr[1];
}

console.log(returnsecondvalue(myarr));