// Reemplazar bucles mediante recursión
function sum(arr, n) {
    // Only change code below this line
  if (n <=0){
    return 1;
  
  } else {
    return suma(arr, n -1) + arr[n-1];
  }
    // Only change code above this line
  }