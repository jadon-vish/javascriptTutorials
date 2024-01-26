const myNumebers=[1,2,3,4,5,6,7,8,9,10];

//const newNums=myNumebers.map((num)=>num+10);

//method chaining:

const newNums=myNumebers.map((num)=>num*10).map((eachnum)=>eachnum+1).filter((num)=>num>40);

console.log(newNums);

