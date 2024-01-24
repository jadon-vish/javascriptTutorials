const myArr=[0,1,2,3,4,5];
const mrHeroes=["Shaktiman","thanos"];
//resizeable , can have elements of different type
//share the shallow cope ->share the same reference(change in the original array as well)
const myArr2=new Array(1,2,3,4,5);

myArr.push(6);
myArr.push(7);

//myArr.pop();//remove last value
// myArr.unshift(8);
// myArr.shift();

//console.log(myArr);
// console.log(myArr.includes(6));
// console.log(myArr.indexOf(4));

const newArr=myArr.join();//join whole array as comma seperated string
//console.log(typeof newArr);

//console.log("A",myArr);

//slice and splice
const myn1=myArr.slice(1,3);//extracts array from the original array and returns it

// console.log("B",myn1);
// console.log("or1",myArr);


const myn2=myArr.splice(1,3);//extracts and removes the list from the original array.

// console.log("C",myn2);
// console.log("or2",myArr);

const indian_heroes=['shaktiman','hatim','krish'];
const hol_heroes=['batman','superman','thor'];

//const allheroes=indian_heroes.concat(hol_heroes);

const all_heroes=[...hol_heroes,...indian_heroes]

//console.log(all_heroes);

const my_arr3=[1,2,[3,4],[3,4,[5,6]],7,8];

console.log(my_arr3.flat(Infinity));


