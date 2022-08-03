//Usar cierre para proteger las propiedades de un objeto para que no se modifique externamente
function Bird() {
    let weight = 15;
    this.getWeight= function(){
      return weight;
    };
  
  
  }
  let ducky= new Bird();
  ducky.getWeight();