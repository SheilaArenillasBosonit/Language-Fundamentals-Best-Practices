/*
Crea una función que tome un array como parametro y lo divida en arrays nuevos con tantos elementos como sean especificados.
La función debe tener dos parámetros:
El primer parámetro es el array entero que se quiere dividir.
El segundo parámetro es el número de elementos que deben tener los arrays en los que se divida el array original del primer parámetro.

*/


function newArray(arr,n){
    let newArr=[]
    do{
        newArr.push(arr.slice(0,n))
        arr.splice(0,n)
        //extraer los datos crear un array y pushear ese array a otro.
    }while (arr.length !== 0)
    return newArr
}

console.log(newArray([1, 2, 3, 4, 5, 6, 7,8],6))
