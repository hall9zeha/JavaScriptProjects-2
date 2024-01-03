import { retornaArreglo } from "../../base-pruebas/07-deses-arr"

describe('Pruebas de desestructuración', () => { 

    test('Debe retornar un string y un number',()=>{
        const [strings, numbers] = retornaArreglo();//desestructuramos los elementos del arreglo para obtener la cadena y el número 

        expect(strings).toBe('ABC');
        expect(typeof strings).toBe('string');//también podemos comparar si el tipo de elemento desestructurado es una cadena

        expect(numbers).toBe(123);
        expect(typeof numbers).toBe('number');

    })
 })