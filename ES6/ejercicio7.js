// Crear cadenas con liteales de plantilla
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    let failureItems= [];
    for( let element in arr){
        failureItems.push(`<li class="text-warning">${arr[element]}</li>`)
    }
  
    // Only change code above this line
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);

  console.log(failuresList);