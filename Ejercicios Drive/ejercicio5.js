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

  //Creamos dos variables nuevas (ya que me aparecia un error como que ya estaban siendo utilizadas)
    let newArr2 = []
    let  f
    //Realizamos un bulcle for, para sacar la largura del array
        for (f = 0; f <= arrCities.length - 1; f++) {

            //Creamos un primer if donde le decimos que la calpital tiene que ser falsa para que isSpain sea falso
            if (arrCities[f].capital === false) {
            let isSpain = false;

            //Dentro del if creamos otro en este caso para que isspain sera true 

                if (arrCities[f].country === "Spain") {
                    isSpain = true;
            }

            //Realizamos un push en el nuevo array , donde le marcamos como se tiene que visualizar 
            newArr2.push({
            "city": arrCities[f].city,
            "isSpain": isSpain
            })

            console.log(newArr2)
    }
}
        