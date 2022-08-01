//Dado tres arrays de números, sacar en un nuevo array la intersección de estos. 
const arrNumber1 = [1,2,3];
const arrNumber2 = [1,2,3,4,5];
const arrNumber3 = [1,4,7,2];
//Creamos la funcion
function interaction(arr1, arr2, arr3){
    let newArray=[];
    let x =[arr1,arr2,arr3]
    
    // Creamos una variable en la cual filtramos x y hacemos un map de la largura del elemento 
    let test = x.filter(element=>element.length ===Math.min(...x.map(element=>element.lenght)))[0]

    //Comparamos con el esto de los arrays
    let newArr1 = x.filter(element => element.length > test.length)[0]
    let newArr2 = x.filter(element => element.length > test.length)[1]

    //Crearemos un for Each
    test.array.forEach(element => {
        if(newArr1.includes(element)&& newArr2.includes(element)) newArray.push(element)
        
    })
    console.log(newArray)


};
interaction(arrNumber1, arrNumber2, arrNumber3);