import { renderHook, act} from '@testing-library/react';
import { useForm } from '../../hooks/useForm';

describe('Test in useForm custom hook', () => { 

    const initialValue ={
        name:'Barry',
        email:'barry@mail.com'
    }
    const {result} = renderHook(()=>useForm(initialValue));

    test('should return a form values for default', () => { 
        
        //Ya que el resultado que obtenemos es un arreglo, para desesctructurarlo podemos poner cualquier nombre
        //a los elementos dentro de este, al ser una referencia a su posición, a diferencia de recibir un objeto
        //cuyos nombres deben coincidir.
        const [formValues] = result.current;
        expect(formValues).toEqual(initialValue);
    });

    test('should change form value (name)', () => { 
        const {result} = renderHook(()=>useForm(initialValue));
        //Como solo necesitamos la función handleInputchange que viene en el arreglo, dejamos un espacio " ,"(puede ponerse únicamente una coma"," sin el espacio)
        //delante para declarar que no necesitamos el elemento anterior
        const [ ,handleInputChange] = result.current;
        const newUser='Martha';
        act(()=>{
            handleInputChange({target:{name:'name',value:newUser}});
            
        });
        const [formValues] = result.current
        expect(formValues.name).toBe(newUser)
        console.log(formValues)
    });

    test('should reset the form to initial value for default', () => { 
        const {result} = renderHook(()=>useForm(initialValue));
        const [ ,handleInputChange, resetForm] = result.current;
        const newUser='Martha';
        act(()=>{
            handleInputChange({target:{name:'name',value:newUser}});
            resetForm();
        });
        const [formValues] = result.current;
        expect(formValues).toEqual(initialValue);
        console.log(formValues);
    });
 })