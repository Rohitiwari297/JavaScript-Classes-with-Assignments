//Array -> Array is a collaction of deferant type of data or data type,
let a = [1 , 2, 3, 4, "Ravan", false];
console.log(a);

let b = new Array(5); // In this "()" bracket you can define the length of the array. and also you can define the name of per length of array like (abc, def, ghi,....)
console.log(b)

/**
 * given array -> [11,21,31,41,51]
 * indexes/pos -> [0 , 2, 3, 4, 5] //last element index = arr.length -1
 */

console.log(a[4]) // this is the to check array element space value // here check a of 4th value.

a[4] = "Ram"; //this is the way to change the runtime array value.
console.log(a);