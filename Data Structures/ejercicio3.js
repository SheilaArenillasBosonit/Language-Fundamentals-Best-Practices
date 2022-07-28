// Agregar elementos a una matriz con push() y unshift()
function mixedNumbers(arr) {
    // Añade la cadena al principio del array
  arr.unshift('three', 2, "I");
      
  
      arr.push(7, "VIII",9);
      
    // añade la cadena al final
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));