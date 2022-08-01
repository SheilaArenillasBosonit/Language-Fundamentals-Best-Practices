//Dado un array de valores, devolver un array truthy (sin valores nulos, vacíos, no números, indefinidos o falsos)
const arrDirty = [NaN, 0, 5, false, -1, '',undefined, 3, null, 'test']

function TruthyArr (arr){
    let result=[];
    let error =[NaN, false, '', undefined, null];
    for(let i=0; i<arr.lenght; i++){
        
        if(error.includes(error[i])===false){
            result.push(arr[i])
        }

        
    }
    return result;
}
console.log(TruthyArr(arrDirty));