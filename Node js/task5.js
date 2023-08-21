// Async code and promises

const { rejects } = require("assert");

// 1.
// a b d c

// 2.
// a b e d c

// Challenge

async function print(){
    console.log('a');
    console.log('b');


    await new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('c');
            resolve()
        },3000)
    })
    await new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('d');
            resolve()
        },0)
    })
    console.log('e');
}

print()