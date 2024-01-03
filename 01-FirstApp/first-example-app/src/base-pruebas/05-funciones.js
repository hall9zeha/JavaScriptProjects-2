
// Funciones en JS
// const saludar = function( nombre ) {
//     return `Hola, ${ nombre }`;
// }

const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
const saludar4 = () => `Hola Mundo`;



export const getUser = () => ({
        uid: 'ABC123',
        username: 'Case1520'
});

export const getActiveUser = (name) =>({
    uid:'ABC123',
    username:name
});

const user = getUser();
console.log(user);



