//Static Method in Object || Static Function in Object

class product{
    //Data members
    name;
    price;
    rating;

    constructor(n , p, r){
        this.name = n;
        this.price = p;
        this.rating = r;
    }

    static custom(){
        console.log('calling static method')
    }

    display(){
        console.log("calling display method")
    }

}

const finalClass = new product("Apple Iphone" ,  100000 , 5)
console.log(finalClass)

product.custom() // here we are calling static method

//Note :- Static method is alway calling with "className.staticName"