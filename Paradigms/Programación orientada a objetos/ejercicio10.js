//usar propiedades de prototipo para reducir el código duplicado

function Dog(name) {
    this.name = name;
  }
  
  
  
  // Only change code above this line
  Dog.prototype.numlegs=4;
  let beagle = new Dog("Snoopy");