//Usar la recursividad para crear una cuenta regresiva
// Only change code below this line
function countdown(n){
    if (n<1){
      return[]
  
    }else{
      const array=countdown(n-1);
      array.push(n);
      return array;
    }
  }
  // Only change code above this line