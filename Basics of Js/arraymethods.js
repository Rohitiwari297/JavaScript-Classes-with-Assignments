//Array Methods-

//1- Push() - for addition array element from last

let arr = [1,2,3,4,5];
arr.push(6,7);
console.log(arr);

//2- Pop() - for deletion array element from last only one element delete from the end.

arr.pop();
console.log(arr);

//2- Shift() - delete one element from the starting

arr.shift();
console.log(arr);

//4- Unshift() - Addition one element form the starting

arr.unshift(9);
console.log(arr);

//5- "d = arr.shift()" - this method to recover aur deleted element.

let f = arr.shift();
console.log(f);

//6- concat() - for this method we can add to array table.

let arr1=[1,2,3,4];
let arr2=[5,6,7];
let arr3=arr1.concat(arr2);
console.log(arr1, arr2, arr3);

//7- Join() - for clubing array element

let s = arr3.join("")
console.log(s);

//8- Reverse() - For reversing the array element

arr3.reverse();
console.log(arr3);

//9- IndexOf() - for finding the index number of the array element.

console.log(arr3.indexOf(6));

//10- Slice() - for fatching/cut contigious part of the array element.

let arr4 = [1,2,3,4,5,6] // we want ont [3,4,5]
console.log(arr4.slice(2,5));

//11- Splice() - for add elenent in any possition to the array.

arr4.splice(2,1,11); //Here 2 - means what possition, 0 - means you want to delete any number, 11 - means - what element you add
console.log(arr4);


