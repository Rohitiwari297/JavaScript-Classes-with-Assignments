//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//spred Operator(...)

// const oneArray = [1, 2, 3, 4]
// const twoArray = [5, 6, 7, 8, 9]

// // const threeArray = oneArray.concat(twoArray)    //(first way)

// const threeArray= [...oneArray, ...twoArray]      //(Seconnd way)
// console.log(threeArray)




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// we can defined array in two types

//1-
let arrayOne = [4,6,7,8,9]
//2-
let arrayTwo = new Array(9,8,7,6,5,5)



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Rest Operator(...)


// function myArgument(){

//     let args = Array.from(arguments)             //Array.from() -> convert object to array
//     let finalargs = args.map(element => element ) // using map() loop for each element
//     console.log(finalargs)
    
// }


// myArgument(1,3,5,6,7,8)
// myArgument(1,3,5,6,7,8,6,7,9,10,20,)




//same word we can done with Rest operator +++++++++++++++

function myArgumentv2(...agrs){
    // let args = Array.from(arguments)            //rest method ke sath is line koi jarurat nhi hai
    let finalargs = agrs.map(element => element)
    console.log(finalargs)
}

myArgumentv2(1,3,5,6,7,8)