// primitive , immutable datatypes
//ways to create:

//String literals:
let name='Vishesh';

//new String objects:
let fullName=new String('Vishesh Jadon');

//String interpolation/template literal:

let myname=`My full name is ${fullName}`;

//String operations:


//SEARCH OPERATIONS:

//1.indexOf('substr') - to find the first index of the occurence.search('substr') also works similarly else -1
let indOff=myname.indexOf('f');
//console.log(indOff);

//2.lastIndexOf('str') - index of last occurence. else -1

//3.includes(str,positiob=0(default))

//console.log(myname.includes('na',10));

//4.startsWith(substr,position-0);
//5.endsWith(substr,position-0);
