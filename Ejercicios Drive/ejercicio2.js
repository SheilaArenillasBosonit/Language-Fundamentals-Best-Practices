//Dado un array de valores, devolver un array truthy (sin valores nulos, vacíos, no números, indefinidos o falsos)
const arrDirty = [NaN, 0, 5, false, -1, '',undefined, 3, null, 'test']

function TruthyArr (arr){
    let result=[];
    let error =[NaN, false, '', undefined, null];
    //Hacemos un bucle para poder desglosar el array
    for(let i=0; i<arr.lenght; i++){
        //Incluimos un if para descartar los valores que no nos interesan
        if(error.includes(error[i])===false){
            result.push(arr[i])
        }

        
    }
    return result;
}
console.log(TruthyArr(arrDirty));