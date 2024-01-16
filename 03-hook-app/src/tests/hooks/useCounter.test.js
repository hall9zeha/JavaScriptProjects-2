import {renderHook, waitFor, act} from '@testing-library/react';
import { useCounter } from '../../hooks/useCounter';

describe('Tests in useCounter hook', () => {

    test('should return default values', () => { 
        const {result} = renderHook(()=>useCounter());
        console.log(result.current);
        expect(result.current.state).toBe(10);//Se espera que el valor por defecto sea 10 en este caso
        expect(typeof result.current.increment).toBe('function');
     });

    test('should return 100 in the counter', () => { 
        const {result} = renderHook(()=>useCounter(100));
        
        expect(result.current.state).toBe(100);
      
    });

    test('should increment counter in 1',()=>{
        const {result} = renderHook(()=>useCounter(100));

        const{increment} = result.current;
        //Para realizar cualquier acción en el contexto de nuestro hook de pruebas usamos act
        //caso contrario nos dará un error al ejecutar la función "increment" que obtenemos de nuestro hook
        act(()=>{
            increment();
        })

        expect(result.current.state).toBe(101);
        
    })
    test('should decrement counter in 1',()=>{
        const {result} = renderHook(()=>useCounter(100));

        const{decrement} = result.current;
        //Para realizar cualquier acción en el contexto de nuestro hook de pruebas usamos act
        //caso contrario nos dará un error al ejecutar la función "decrement" que obtenemos de nuestro hook
        act(()=>{
            decrement();
        })

        expect(result.current.state).toBe(99);
        
    })
    test('should reset counter to default value',()=>{
        const {result} = renderHook(()=>useCounter(100));

        const{increment,reset} = result.current;
        //Para realizar cualquier acción en el contexto de nuestro hook de pruebas usamos act
        //caso contrario nos dará un error al ejecutar la función "reset" que obtenemos de nuestro hook
        act(()=>{
            increment();
            reset();
            
        })

        expect(result.current.state).toBe(100);
        
    })
 })