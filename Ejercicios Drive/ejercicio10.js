/*
Crea una función que elimine las etiquetas html o xml de un string.
La función debe tener un string como único parámetro.

*/

function removeHTML (srt){
    let text=[ ];

    for(let i=0; i<srt.length; i++) {
        text.push(srt[i]);

        if(text[text.length-1]===">") text.splice(text.indexOf("<"),text.indexOf(">")+1);

       

    }
    return text.join('');

}

const result= removeHTML('<h1>hola</h1><h2>¿Que tal?</h2>');
console.log(result);