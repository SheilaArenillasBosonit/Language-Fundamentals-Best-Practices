// Cambiar el protoripo a un nuevo objeto
function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    // Only change code below this line
    numLengs: 4,
    eat: function(){
      console.log("nom nom nom");
    },
    describe: function(){
      console.log( "My name is" + this.name);
    }
  
  };
