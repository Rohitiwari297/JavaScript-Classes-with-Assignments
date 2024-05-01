const powerTwo = (n) => {
    return n ** 2
}

function powerCube(powerTwo, n){
    return powerTwo(n) * n;
} 

// console.log(powerCube(powerTwo, 5));

function sayHello (){
    return () => {
        console.log("hello rohit")
    }
}

// let guessValue = sayHello()
// console.log(guessValue);    //here console is return function


// guessValue()             // now you can return console value which is deffiied.


// const myNums = [1,2,3,4,5]

// const sumArray = arr => {
//     let total = 0
//     arr.forEach(function(element) {
//         total += element 
//     });
//     return total
// }

// console.log(sumArray(myNums));



//Note: A function that returns a function or takes other functions as arguments is called a higher-order function.

function coursePrice(num){
    return num ** 2
}

// console.log(coursePrice(6));

let includingGST = (coursePrice , num ) => {
    return coursePrice(num) + num
} 

// console.log(includingGST(coursePrice,3));


//fuction in return statement

function sayMyName(){
    return () =>{
        console.log("Rohit")
    }
    
}

guessName = sayMyName()

// console.log(guessName)   //Here console will retutns "[Function (anonymous)]" which is defined in the return statement

// guessName()    // know here function call will print retunt function statement 



const highOrderFunction = n => {
    const oneFun = m => {
        const twoFun = p => {
            return n + m + p
        }
        return twoFun
    }
    return oneFun
}

// console.log(highOrderFunction(2)(3)(4));