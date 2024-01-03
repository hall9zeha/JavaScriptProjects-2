import { getImagen } from "../../base-pruebas/11-async-await";

describe('Tests with async-await and fetch', () => { 
    //En este caso en lugar de usar done() convertimos la función en asíncrona
    test('Should return image url', async()=>{
        
        const  url = await getImagen();
        expect(typeof url).toBe('string');

        //En el caso de que obtuvieramos un error
        //al recibir cualquier dirección menos una que contenga https
        //expect(url.includes("https://")).toBe(true)

    });

})