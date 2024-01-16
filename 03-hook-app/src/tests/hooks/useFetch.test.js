import {renderHook, waitFor, act} from '@testing-library/react';
import { useFetch } from '../../hooks/useFetch';

describe('Tests in useFetch custom hook', () => { 
    test('should return default data', () => { 
        const url = 'https://api.breakingbadquotes.xyz/v1/quotes/1'
        const {result} = renderHook(()=>useFetch(url));
        //Como nuestro useFetch devuelve una promesa que es asíncrona, al ser nuestra prueba síncrona
        //la primera vez que observemos nuestra data no tendrá valores 
        console.log(result.current);
        const {data, loading,error} = result.current;
        expect(data).toBe(null)
        expect(loading).toBe(true)
        expect(error).toBe(null)

     })

     test('should return the desired information and loading in false, erro in false',async ()=>{
        const url = 'https://api.breakingbadquotes.xyz/v1/quotes/1'
        const {result} = renderHook(()=>useFetch(url));

        await waitFor(()=>{
            const {data, loading, error} = result.current
            console.log(data);
            expect(data.length).toBe(1)
            expect(loading).toBe(false)
            expect(error).toBe(null)
            
        },{timeout:2000})
     })

     test('should handle error',async ()=>{

        //Usamos una api con un cambio en la url("apid") para provocar el error
        const url = 'https://reqres.in/apid/users?page=2'
        const {result} = renderHook(()=>useFetch(url));

        await waitFor(()=>{
            const {data, loading, error} = result.current
            console.log(data);
            expect(data).toBe(null)
            expect(loading).toBe(false)
            expect(error).toBe("Can't fetch data of  API")
            
        },{timeout:2000})
     })
 })