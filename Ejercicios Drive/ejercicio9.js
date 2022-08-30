/*
Crea una función que a partir de un objeto de entrada, retorne un objeto asegurándose que las claves del objeto estén en lowercase.
La función debe tener un objeto como único parámetro.
 
*/
const lowercase = parametro1 =>
Object.keys(parametro1).reduce((value, key) => {
    value[key.toLowerCase()] = parametro1[key];
    return value;
}, {});

const Users = { NamE: "Sheila", LAStnaME: 'Arenillas' };
console.log(lowercase(Users));