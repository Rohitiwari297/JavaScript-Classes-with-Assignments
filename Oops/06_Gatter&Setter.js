// Gatter and Setter Method

/**
 * 1-Encapsulation:
Getters and setters allow you to encapsulate the implementation details of an object. This can make the code more readable and maintainable.

2-Data validation:

You can use getters and setters to validate the data that is being set. For example, you could use a setter to ensure that a password is at least 8 characters long.

3-Lazy loading:
You can use getters to lazy load data. This means that the data is not loaded until it is actually needed. This can improve the performance of your application.


Overall, getters and setters are a powerful tool that can be used to improve the quality of your JavaScript code.
 */

class product{
    //Data members
    //name;
    //price;
    //rating;
    #rating;

    constructor(n , p, r){
        this.name = n;
        this.price = p;
        this.#rating = r;
    }

    static custom(){
        console.log('calling static method')
    }

    // getRating(){
    //     console.log(this.#rating)
    // }

    // setRating(r){
    //     if(r < 0)return;
    //      this.#rating = r;  //Imprtant syntax
        
    // }


    //You can also user more clean way in js (Naam Kuchh bhi likh skte ho RatingGetter)in this syntax.
    
    get RatingGetter(){
        console.log(this.#rating)
    }

    set RatingSetter(r){
        if(r < 0)return;
         this.#rating = r;  //Imprtant syntax
        
    }

    display(){
        console.log(this.name, this.price, this.#rating)
    }

}

const finalClass = new product("Apple Iphone" ,  100000 , 5)
console.log(finalClass)


// finalClass.setRating(10)
// finalClass.getRating()



// with the help of the second way of the syntax you can access the element as properties.
finalClass.RatingSetter = 10
finalClass.RatingGetter;