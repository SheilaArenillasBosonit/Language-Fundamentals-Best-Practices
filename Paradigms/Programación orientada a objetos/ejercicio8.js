//Comprobar el constuctor de un objeto con instanceof
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  // Only change code below this line
  let myHouse = new House(3);
  
  myHouse instanceof House;
  //El operador instanceof verifica si un objeto en su cadena de prototipos contiene la propiedad prototype de un constructor.
