// Acceso a objetos anidados
const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  
  const gloveBoxContents = myStorage.car.inside["glove box"];