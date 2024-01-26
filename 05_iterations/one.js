// for

// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     if(index === 5){
//         console.log('5 is best number');
//     }
//     console.log(element);
// }

// for (let i = 0; i <= 10; i++) {
//     for (let j = 0; j <= 10; j++) {
//       //console.log(`inner loop value ${j} and inner loop ${i}`);
//       console.log(i+' * '+j+' = '+i*j);
//     }
// }

// const myArray=['flash','superman','batman'];

// for (let i = 0; i < myArray.length; i) {
//     const element = myArray[i];
//     console.log(element); 
// }

//break and continue 
//break - gets you outside the loop
//continue - skips the further code in that iteration

for (let i = 1; i <= 20; i++) {
    if(i == 5){
        continue;
    }
    console.log(`value of i is ${i}`);
}

console.log('outside loop');
