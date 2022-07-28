//Quitar elementos de una matriz con pop() y shift()
function popShift(arr) {
    let popped=arr.pop(); // Quita el elemento al final
    let shifted=arr.shift(); // quita el elemto al principio 
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));