//Uso de Objetos para busquedas
// Setup
function phoneticLookup(val) {
    let result = "";
  
    // Only change code below this line
    var lookup= {
       "alpha":"Adams",
       
     "bravo":"Boston",
     "charlie": "Chicago ",
  "delta":"Denver",
        
  "echo": "Easy",
   "foxtrot": "Frank"
    }
  
    // Only change code above this line
    result=lookup[val]
    return result;
  }