//Combine una matriz en una cadena usando el método de unión --> join
function sentensify(str) {
    // Only change code below this line
    return str.split(/\W/).join(" ");
    // Only change code above this line
  }
  
  console.log(sentensify("May-the-force-be-with-you"));