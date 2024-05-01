//Prototype

let myHeros = ["Thor", "Spiderman" ]
let dcHeros = ["batman", "flash", "superman"]

let herosPower = {
    Thor : "hammer",
    Spiderman : "sling",

    getHerosPower : () => {
        console.log(`Spidy power is ${this.Spiderman}`)
    }
}

//IF YOU WANT TO ADD SOME OTHER PROPERTIES IN THIS OBJECT

Object.prototype.rohit = function(){
    console.log("Rohit is present in all object")
}

console.log(myHeros.rohit())
console.log(herosPower.rohit())