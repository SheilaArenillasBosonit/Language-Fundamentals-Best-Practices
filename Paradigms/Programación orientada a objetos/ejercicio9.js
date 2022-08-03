//Comprender las propiedades propias
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  for (let property in bird){
    if(Bird.hasOwnProperty(property))ownProps.push(property);
  }
  // Only change code below this line