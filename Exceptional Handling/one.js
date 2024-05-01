// try-and-catch -> error handling

//Syntax

// try {
    
// } catch (error) {
    
// }


//Example

try {
    let x = undefined
    console.log(x[0])
} catch (err) {
    console.log("Error handling in catch", err)  //Here err is showing what is error in try block
}finally{
    console.log("finally always gets executed")
}