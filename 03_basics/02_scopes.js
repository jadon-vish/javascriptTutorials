//var-> does'nt work in block scope like funcitons , loops , etc.

//values outside blocks is global scope else block scope
var c=300;
if(true){
    let a=10;
    const b=20;
    var c=30;
}

// console.log(a);
// //console.log(b);
// console.log(c);

function one(){
    const username='Hitesh';
    function two(){
        const website='youtube';
        console.log(username);
    }
    //console.log(website); -> block scope of website
    //two();
}

one();
