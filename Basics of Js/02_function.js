function functionName(){
    // console.log("Hi there")
    // console.log("how are you");
}
// functionName();

function sqr(x){  // x -> is the parameter
    // console.log(x*x);
    return x*x;
}
let a = sqr(8); // 8 -> is the arguments
// console.log(a);

//function returning value-

function passMessage(){
    return "I am happy to lear with my self"
}
// let newMessage = passMessage();

// console.log(newMessage);


// ++++++++++++++++++++++++++ Function with a parameter +++++++++++++++++++++++++


//function declearation 

function displayMessage (messageToBeDisplayed = "I am proud of my shiva"){
    console.log(messageToBeDisplayed);
}

// displayMessage();


function add(x, y){
    return x + y;
}
// console.log(add(1, 3));

//second way 

function add(x, y = 10){
    return x + y;
}
// console.log(add(1));


function sumOfTwoNumber([num1, num2]){
    return num1 + num2;
}

let number = [10, 20];

let result = sumOfTwoNumber(number);

// console.log(result); 



//++++++++++++++++++++++++++++ With a Unlimited Parameters ++++++++++++++++++++++++++++++++++++++++++++++++++++

//Function Declearation


function sumOfAllNumbers(){
    let sum = 0;
    for(let i = 0; i < arguments.length; i++) sum += arguments[i];
    return sum;
}


//Function Call


let newResult = sumOfAllNumbers(1, 2, 3, 4, 9);

console.log(newResult);


const squire = (x) => x * Y;




