// regEx ->  Its stands for "Regular Expresson" it is use for the Find and Replacement.


//These are the types of creating regEx

let pattern = "pw"  // 

let regExOne = new RegExp(pattern)  

let flag = "gi"
let regExTwo = new RegExp(pattern,flag)

let regExThree = /pw/gi


//how to use regEx

const strToCheck = "pw is growing at a rapid speed and recently they are working on pwskills to create skills based pwcontect"

const result = regExThree.test(strToCheck)
console.log(result);  //here our we are finding -> /pw/gi

//Note -> Onece regEx is create then you have received the test() method you can use this method.

// receiving result always in boolean value

//Second way to use this

const anotherResult = strToCheck.match(regExThree)
console.log(anotherResult); 

// this type of using regEx has been printing actual valu not boolean result

//third way to use this

//let regExThree = /pw/gi -> we have to replace pw to p-w

const oneMoreResult = strToCheck.replace(regExThree, "p-w")
console.log(oneMoreResult)

//Example for uses of replace() in regEx

const webUrl = "https://learnwithrohit.com/Rohit%20tripathi"

const usableUrl = webUrl.replace(/%20/, "-")
// console.log(usableUrl)


//if you want to replace any number in Url then you can use "\d"

const usableUrl2 = webUrl.replace(/%\d0/, "-")
console.log(usableUrl)

// \d - use for one number
// \d\d - use for Tow numbers





