// Comparaciones con el lógico y el operador
function testLogicalAnd(val) {
    // Only change code below this line
  
    if (val) {
      if (val<= 50 && val>= 25) {
        return "Yes";
      }
    }
  
    // Only change code above this line
    return "No";
  }
  
  testLogicalAnd(10);