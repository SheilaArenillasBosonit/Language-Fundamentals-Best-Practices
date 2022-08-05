//Utilice el map, filter o reduce para resolver un problema complejo
const squareList = arr => {
    // Only change code below this line
    return arr
    //filter arr integers and positive elements
    .filter(number => (number>0) && (number%parseInt(number)===0))
    // calculate foreach element its square
    .map(number => Math.pow(number, 2));
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);
  