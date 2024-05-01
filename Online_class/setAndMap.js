//Set in JavaScript - The Set object lets you store unique values of any type

// To create a  Set -> new Set()

let emptyset = new Set()

// console.log(emptyset.add(2)) //for adding some value

// console.log(emptyset.clear)
// console.log(emptyset.size)
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Que - who to convert array to Set
let myArray = [1,2,3,4,5]

let newSet = new Set(myArray)

// console.log(newSet)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Ques - Can I ask a Question with Set - YES

// console.log(newSet.has(4))

// Here we are asking that in newSet value 4 is existing or not



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Set Defferance

//Que - Write a function to print different elemets from to Sets

// const setA = new Set([1,2,3,4,5])
// const setB = new Set([1,2,3,4,5,6,7,8,9,10])

//console.log(setA)
//console.log(setB)


function differentSet(setA, setB){
    return new Set([...setA].filter(el => !setB.has(el)))
}

console.log(differentSet())
