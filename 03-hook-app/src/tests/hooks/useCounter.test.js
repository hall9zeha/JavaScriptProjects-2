import {renderHook, waitFor} from '@testing-library/react';
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
 })