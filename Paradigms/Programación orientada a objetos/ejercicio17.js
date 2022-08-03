//Usa la herencia para no repetirte

function Animal() {}
Animal.prototype = {
    // constructor
    constructor: Animal,
    // common function 
    eat: function(){
        console.log("nom nom nom");
    }
}

// function 1
function Cat(name) {
    this.name = name;
}
//function 2
function Bear(name) {
    this.name = name;
}

// setting prototypes
Cat.prototype = { constructor: Cat};
Bear.prototype = { constructor: Bear};