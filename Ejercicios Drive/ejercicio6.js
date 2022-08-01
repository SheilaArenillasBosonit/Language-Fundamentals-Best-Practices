/*
Crea una función que redondee un número float a un número específico de decimales. 
La función debe tener dos parámetros: 
Primer parámetro es un número float con x decimales
Según parámetro es un int que indique el número de decimales al que redondear
Evitar usar el método toFixed()


const roundedResult = roundTo(2.123, 2);
console.log(roundedResult); // 2.12
 
const roundedResult = roundTo(1.123456789, 6);
console.log(roundedResult); // 1.123457
*/
function roundedResult(num, dec){
    
    let numToString = num.toString();
    
    let index = numToString.indexOf('.')+dec;
    
    let numTochange= numToString[index];

    if(numTochange>5){
        numTochange++;
    }else {
        numTochange --;
    }

    let finished = numToString.substring(0,index+1);

    return parseFloat(finished.replace(finished[finished.lenght-1], numTochange))
};
console.log(roundedResult(1.123456789, 6));