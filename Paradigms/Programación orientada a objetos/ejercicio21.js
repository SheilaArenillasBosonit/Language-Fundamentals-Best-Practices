//Agregar métodos después de la herencia
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }
Dog.prototype=Object.create(Animal.prototype);
Dog.prototype.constructor=Dog;

// Only change code below this line
Dog.prototype.bark= function(){
    console.log("Wolf!");
};



// Only change code above this line

let beagle = new Dog();
beagle.eat();
beagle.bark();