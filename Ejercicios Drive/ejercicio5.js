//Dado un array de ciudades, sacar en un nuevo array las ciudades no capitales con unos nuevos parámetros que sean city y isSpain. El valor de isSpain será un booleano indicando si es una ciudad de España.
//Ejemplo: {city: "Logroño", isSpain: "true"}
const arrCities2 = [
    {city: 'Logroño', country: 'Spain', capital: false},
    {city: 'Bordeaux', country: 'France', capital: false},
    {city: 'Madrid', country: 'Spain', capital: true},
    {city: 'Florence', country: 'Italy', capital: true},
    {city: 'Oslo', country: 'Norway', capital: true},
    {city: 'Jaén', country: 'Spain', capital: false}
  ]
  function newArr(arr){

    let newArray=[];
    //Creamos una variable a la que le pasamos un filtro
    const noCapital = arr.filter(obj=> !obj.capital);
    // Hacemos un bucle for
    for (let i=0; i< noCapital.lenght; i++){
        //En el cual pondremos una condicion
        if(noCapital[i].country==='Spain'){
            newArray.push({city: noCapital[i].city, isSpain:true});
        }else{
            newArray.push({city: noCapital[i].city, isSpain: false})
        }
       
    }
    return newArray;

    
  };
  console.log(newArr(arrCities2))