// class product {
//     //properties → variable → data member
//     name;
//     price;
//     rating;

//     //None -> constructo method is by default existing in the class, but you can also create you own constructor.
//     constructor(){
//         console.log("Creating your own constructo")
//     }

//     //behaviour → function → member function
//     display(){
//         console.log("displaying the current products")
//     }
// }
// const p = new product( )  // new → create an empty plain objects
// // new product() → in this above piece of code we are calling the contructor method

// console.log(p)


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// class product {
//     //properties → variable → data member
//     // name;
//     // price;
//     // rating;

//     //None -> constructo method is by default existing in the class, but you can also create you own constructor.
//     constructor(n , p , r){
//         console.log("Creating your own constructo")
//         this.name = n;
//         this.price = p;
//         this.rating = r;
//     }

//     //behaviour → function → member function
//     display(){
//         console.log("displaying the current products")
//     }
// }
// const p = new product("iphone", 100000, 5)  // new → create an empty plain objects
// // new product() → in this above piece of code we are calling the contructor method

// console.log(p)



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


class product {
    //properties → variable → data member
    // name;
    // price;
    // rating;

    //None -> constructo method is by default existing in the class, but you can also create you own constructor.
    constructor(n , p , r){
        console.log("Creating your own constructor")
        this.name = n;
        this.price = p;
        this.rating = r;

        //return 10 ; //if you're return primitive  then it will be not returned.

        //return {x : 0 , y : 10} ; //if you return non primitive  then it will be returned.

        // In simple language -> if you return object then it will be returned other wise not.
    }

    //behaviour → function → member function
    display(){
        console.log(this)
        console.log("displaying the current products" , this.name, this.price , this.rating )
    }
}
const p = new product("iphone", 100000, 5)  // new → create an empty plain objects
// new product() → in this above piece of code we are calling the contructor method

console.log(p)

// p.display()

