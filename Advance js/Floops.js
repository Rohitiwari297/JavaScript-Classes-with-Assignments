
//forEach loops

let arr = [24 , 44 , 32 , 66]

//with simple fulction

arr.forEach(function(element, index , arr){         
    // console.log(element, index, arr);
});


//with arrow funtion

arr.forEach((element, index, arr) => {
    // console.log("arrow base funtion:", element, index, arr);
});


//Change heros name in lowerCase to uperCase 

let heros = ["Ram" , "Krishna" , "Lord Shiva" , "Hanuman"]

heros.forEach((element) => {
    // console.log(element.toUpperCase());
})


//same work with "Map()"

arr.map((element, index, arr)=>{
    // console.log(element, index, arr);
})


heros.map((element) => {
    // console.log("Element with Map:", element.toUpperCase());
})


//filter  

//Here I'm printing those value who is ends with "raj".

let filmyHeros = ["Nagraj" , "Devraj" , "Shaktiman" , "Manraj"]

// console.log(filmyHeros)

const herosEndWithRaj = filmyHeros.filter((el) => {
    // return el.endsWith("raj")          //if you used filter method then "RETURN" is Important
})

// console.log(herosEndWithRaj);


//Reduce -> You can track previous value and current value also



//shoping card

const cartBill = [20 , 30 , 40]
const sumOfCartBill = cartBill.reduce((previous, current) => 
    previous + current, 0)   // here "0" is the start value (start from 0)

// console.log(sumOfCartBill)


//Every method

const gameScore = [200, 300, 310, 250, 150]
console.log(typeof gameScore[1])

//check if all values are numbers

const gameScoreCheck = gameScore.every((value) => typeof v === "number")

//you can write any type of parameter like value or v, val 
//if you check typeof then here  number is always in string and lowerCase

// console.log(gameScoreCheck);


//Find methot

//find score above 200

const cricketScore = [200, 300, 310, 250, 150]
const findScore = cricketScore.find((score) => score > 200)

// console.log(findScore);


//Note:  with this method jo pahale 300 ke above value milega wo hi value print hoga


//FindIndex Method


const ages = [15, 21, 18, 30, 44];

const findAge = ages.findIndex((arr) => arr > 18 )

console.log(findAge)

//Note: findIndex() method is same as find() method, find() is return value & findIndex()retuns a array index number



//Some() Method

const AnyNumber = [150, 210, 180, 300, 440];

const findAnyNumber = AnyNumber.some((val) =>  val > 190)

// console.log(findAnyNumber)

//Note: some() method is return true if any value greater then 190 present in given array


//sort() Method

const months = ['March', 'Jan', 'Feb', 'Dec'];
const shortedMonth = months.sort()
console.log(shortedMonth)


//Note: sort() method sort value alphabeticaly A->Z



//reverse() Method
const names = ["Rohit", "Mohit", "Anurag", "Sanket", "Pawan"];
const sortedName = names.reverse()
console.log(sortedName);

//Note: reverse() method reverse the array value 



