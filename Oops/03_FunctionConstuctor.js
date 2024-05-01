// function constructor


function product(n , p, r) {
    this.name = n;
    this.price = p;
    this.rating = r;

    //return 10 ; //if you're return primitive  then it will be not returned.

    //return {x : 0 , y : 10} ; //if you return non primitive  then it will be returned.

    // In simple language -> if you return object then it will be returned other wise not.
}

const finalProduct = new product("macbook" , 1500000 , 5);

console.log(finalProduct)


//Note-> thie theory of "this" keyword pointing to calling context is not applicable with the arrow fuction
