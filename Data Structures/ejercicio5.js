//Quitar elementos mediante splice()
//splice() puede tomar hasta 3 parámetros
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
 arr.splice(0,1);//2 removed
    arr.splice(3, arr.length-1);
// Only change code above this line
console.log(arr);