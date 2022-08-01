/*
Crea una función que a partir de un objeto de entrada, retorne un objeto asegurándose que las claves del objeto estén en lowercase.
La función debe tener un objeto como único parámetro.
 
*/
const myObject ={ 
    name: 'Sheila',
    addres: 'Home'
};
function toLowerCaseKey(obj){
    let key={};
    Object.keys(obj).forEach(element=>{
        keys[element.toLowerCase()]=obj[element];
    });
    return key;
}
const myObjectLoweCase= toLowerCaseKey(myObject);
console.log(myObjectLoweCase);