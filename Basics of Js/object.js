const emp = {
    id: 101,
    name: 'Rohit',
    age: 22,

}
console.log(emp);

//if you want to print only keys

let key = Object.keys(emp);
console.log(key);

// if you want you print only keys value

let value = Object.values(emp);
console.log(value);

//if you want to orint all kys paire in an array form.

let entries = Object.entries(emp);
console.log(entries)


//if you want only update the objects keys value (Not allowed to Addition Keys pair Or Deletion Keys pair)

let sealObject = Object.seal(emp);
console.log(sealObject);

// after using Seal operation you can only update the existing keya pair values-

emp.id = 102;
console.log(emp);

// but you want to add other keys pair lets try-

emp.address = "Lanka";
console.log(emp);  //Not add

// if you want you to fixed/freeze all element of object.

let freeze = Object.freeze(emp);
console.log(freeze);

// after freezing the object you connt changing in the object
// if we want to change id-

emp.id = 100;
console.log(emp);

// if you want to assign this object value in other new 0bject -

let assignValue = Object.assign({n: "Ramayan"} , emp);
console.log(assignValue)