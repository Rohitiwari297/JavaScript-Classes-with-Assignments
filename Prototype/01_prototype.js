//Prototype:- Prototype is the one of the powerfull keyword with the help of which we can inject any properties in object(object.prototype.propertiesName) and Array (Array.prototype.propertiesName).


let myHeros = ['Thor', 'Spiderman']
let dcHeros = ['batman', 'flash', 'superman']

let herosPowe = {
    thor: 'hammer',
    Spidderman: 'sling',

    getSpidermanPower: function(){
        console.log(this.Spidderman)
    }
}

//herosPowe.getSpidermanPower()

//if the above object is decleared some other spaces and if you want to directly inject any propeties in all defined objects then you have to use "Prototype keyword".

//Example:

Object.prototype.rohit = function(){
    console.log('Rohit is present in all objects')
}

//console.log(myHeros.rohit())

//Similarlly if you want to directly inject any propeties in Array then also you have to use "Prototype keyword".

Array.prototype.mohit = function(){
    console.log('Mohit is present in all Array')
}


//chech in Arrya {both are available}
console.log(dcHeros.mohit())
console.log(myHeros.rohit())

//checked in object

//console.log(herosPowe.mohit())
//console.log(herosPowe.rohit())


