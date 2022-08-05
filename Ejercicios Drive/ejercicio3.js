//Dado un array de ciudades, sacar todas las ciudades de España que no sean capitales
const arrCities = [
    {city: 'Logroño', country: 'Spain', capital: false},
    {city: 'Paris', country: 'France', capital: true},
    {city: 'Madrid', country: 'Spain', capital: true},
    {city: 'Rome', country: 'Italy', capital: true},
    {city: 'Oslo', country: 'Norway', capital: true},
    {city: 'Jaén', country: 'Spain', capital: false}
  ]
  function capitalCity(arr){
    //Realizamos un For Each, para ejecutar una función callback
    arr.forEach(obj => {
      //Realizamos un if para decirle que saque todas las que no sean capitales
        if(obj.capital) console.log(obj.city)
        
    });
  }
  capitalCity(arrCities);