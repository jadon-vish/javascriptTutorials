//Immediately Invoked Function Expressions (IIFE) -> executes after declaring only/ no need to run it explicitly
//prevent effects from global  pollution
// syntax : (function)()
// need to be ended by ;

(function chai(){ //named IIFE
    console.log('DB CONNECTED');
})();

((name)=>{
    console.log(`DB CONNECTED 2 with ${name}`);
})('Vishesh')
