//Use el método every para verificar que cada elemento en una matriz cumpla con un criterio
function checkPositive(arr) {
    // Only change code below this line
  
  return arr.every(current => (
          current>=0));
    // Only change code above this line
  }
  
  checkPositive([1, 2, 3, -4, 5]);