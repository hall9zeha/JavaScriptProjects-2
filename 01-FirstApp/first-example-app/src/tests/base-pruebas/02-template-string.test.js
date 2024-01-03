//import '@testing-library/jest-dom';//nos permite el autocompletado de los métodos dentro de expect
import { getSaludo } from "../../base-pruebas/02-template-string";

describe('Pruebas en 02-template-string-js', ()=>{
    test('getSaludo debe retornar el saludo Hola Barry', () => { 
        const name = "Barry";

        const greeting = getSaludo(name);

        expect(greeting).toBe('Hola ' + name);

    })

    //Ahora el método getSaludo debe retornar el valor por defecto si no se envía ningún argumento
    test('getSaludo debe retornar un nombre por defecto si no se envía ningún argumento',()=>{
        
        const greeting = getSaludo();

        expect(greeting).toBe('Hola Case')
    });
});