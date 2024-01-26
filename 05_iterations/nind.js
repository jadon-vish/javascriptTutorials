//reduce

const myNums=[1,2,3];

// const totalNum=myNums.reduce(function(acc, currval){
//     console.log(`acc:${acc} , currval:${currval}`);
//     return acc+currval
// },0);

// const totalNum=myNums.reduce((acc,currval)=>(acc+currval),0)

// console.log(totalNum);

const shoppingCart=[
    {itemName:"JS course",price:299},
    {itemName:"python course",price:999},
    {itemName:"Java course",price:1999},
    {itemName:"Data science",price:12999},    
]

const totalPrice=shoppingCart.reduce((acc,currCourse)=>(acc+currCourse.price),0);

console.log(totalPrice);
