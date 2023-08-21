// Arrays , spread and rest operator

// 2.
const fruits = ['apple', 'orange','','mango','','lemon'];

const updFruits = fruits.map((i)=>{
    if (i==''){
        return 'Empty String';
    }else{
        return i;
    }
})

console.log(fruits);
console.log(updFruits);


// 3.
// const keyword stores the pointer or the address of an array, pointer has changed but not the address or reference point

// 4.
// Spread operator adds elements of an original array to new array. spread operator creates a new object.

// 5.
// Rest operator is used to add multiple arguments in a function with a simple syntax.


//6.
// 1. different objects
// 2. key1:1000 , key2:2