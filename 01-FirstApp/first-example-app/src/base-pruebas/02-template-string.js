


const nombre   = 'Barry';
const apellido = 'Zea';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

console.log( nombreCompleto );


export function getSaludo(nombre = "Case") {//Valor por defecto si no enviamos ningun argumento
    return 'Hola ' + nombre;
}

console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );