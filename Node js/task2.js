// Lets revise javascript concepts


// 1.
const mul = (a,b) => a*b

console.log(mul(5,6));

// 2.
const student = {
    name : "Mustafa Khergun",
    age : 25 ,
    greet(){
        console.log('Hello, I am '+ this.name);
    }
}

student.greet()
