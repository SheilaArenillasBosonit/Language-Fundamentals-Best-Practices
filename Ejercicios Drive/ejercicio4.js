//Dado tres arrays de números, sacar en un nuevo array la intersección de estos. 
const arrNumber1 = [1,2,3];
const arrNumber2 = [1,2,3,4,5];
const arrNumber3 = [1,4,7,2];
//Creamos la funcion
function interaction(arr1, arr2, arr3){
    let newArray=[];
    for (let item1 of arr1){
        for (let item2 of arr2){
            for (let item3 of arr3){
                if (item1 == item2 && item2 == item3 && newArray.indexOf(item1)==-1)
                newArray.push(item1)
            }
        }
    }
    return newArray
    
    

};
interaction(arrNumber1, arrNumber2, arrNumber3);