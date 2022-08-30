//Dado un array de valores, devolver un array truthy (sin valores nulos, vacíos, no números, indefinidos o falsos)
//Creamos un array con valores
const arrDirty = [NaN, 0, 5, false, -1, '',undefined, 3, null, 'test']

//Creamos un resultado del cual filtrados el array para que nos de un array truthy

let result = arrDirty.filter(item => item)

console.log(result)