/*
Crea una función que tome un array como parametro y lo divida en arrays nuevos con tantos elementos como sean especificados.
La función debe tener dos parámetros:
El primer parámetro es el array entero que se quiere dividir.
El segundo parámetro es el número de elementos que deben tener los arrays en los que se divida el array original del primer parámetro.

*/
function newArray(arr, arr2){
    let result=[];
    let subArray=[];

    for(let i; i< arr.length; i++){
        if(subArray.length===arr2){
            result.push(subArray);
            subArray=[];

        }
        subArray.push(arr[i]);
    }
    result.push(subArray)
    return result;
}
const result2 = newArray([1,2,3,4,5,6,7],3);