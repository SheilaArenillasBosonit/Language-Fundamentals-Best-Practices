//Devolver una matriz ordenada sin cambiar la matriz original
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
    // Only change code below this line
   return [].concat(arr).sort((a,b )=> {
          return a-b;

  
    // Only change code above this line
  })
}
  
  nonMutatingSort(globalArray);