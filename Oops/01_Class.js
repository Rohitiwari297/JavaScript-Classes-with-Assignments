class product {
    //properties → variable → data member
    name;
    price;
    rating;

    //behaviour → function → member function
    display(){
        console.log("displaying the current products")
    }
}
const p = new product()  // new → create an empty plain objects
// new product() → in this above piece of code we are calling the contructor method

console.log(p)

//if you want to see fuction member
p.display() 