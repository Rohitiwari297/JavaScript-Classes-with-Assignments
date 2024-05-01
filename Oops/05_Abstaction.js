//Private Data Member (#)

//1-You want to do private rating data member from the user 

class product{
    //name;
    //price;
    //rating;
    #rating;

//2-You have to declear rating in the data member sectiong

    constructor(n,p,r){
        this.name = n;
        this.price = p;
        this.#rating = r;
    }

    display(){
        console.log(this.name, this.price, this.#rating)
    }
}

const finalProduct =new product("Iphone", 100000,5);

console.log(finalProduct);

finalProduct.display()

// Here can't be access the rating and can't be changed