import React from 'react';
import { renderHook, waitFor} from "@testing-library/react";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('test in useFetchGifs hook', () => { 

    test('should return a initial state',async () => { 
        //Ya que un hook solo puede ejecutarse dentro de un función de componente, para probarlos
        //debemos usar la librería "@testing-library/react"
        const {result } = renderHook(()=> useFetchGifs('Violet Evergarden'));

        const {data, loading} = result.current
        //await waitFor(()=>{console.log()})
        //Evaluamos que los valores iniciales sean:
        expect(data).toEqual([]);//Un arreglo vacío
        expect(loading).toBe(true);//Loading en true
     })

     test('should return a gifs array and loading in false', async()=>{
        const {result } = renderHook(()=> useFetchGifs('One punch'));
  
       
        await waitFor(()=>{
                const {data, loading} = result.current
                expect(data.length).toBe(10)
                expect(loading).toBe(false)
                console.log(data)
                console.log(loading)
                
            },{timeout:5000})//Si lo necesitamos cambiamos el valor de espera al ejecutar nuestro hook
            //En nuestro caso se hace una llamada a una API, y si la respuesta demora demasiado, nuestro resultado
            //estará vació, entonces aumentamos el tiempo de respuesta hasta que finalice correctamente la llamada.
            //Esto dependerá de la velocidad de conexión a internet.
             
      
        // expect(data.length).toBe(10);
        // expect(loading).toBe(false);
     });
 })