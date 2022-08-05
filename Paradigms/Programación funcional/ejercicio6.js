//Refactorizar variables globales fuera de funciones
// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(arrVar, bookName) {
  let newArr=[...arrVar];
  newArr.push(bookName);
  return newArr;
  
  // Change code above this line
}

// Change code below this line
function remove(arrVar, bookName) {
  let newArr=[...arr];
  if(newArr.indexOf(bookName)>=0)
   { newArr.splice(newArr.indexOf(bookName),1);
   return newArr

    // Change code above this line
    }
}