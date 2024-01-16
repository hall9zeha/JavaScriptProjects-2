import renderHook, {act, waitFor,render, screen} from '@testing-library/react';
import renderer from 'react-test-renderer';
import { MultipleCustomHooks } from '../../../components/03-Examples/MultipleCustomHooks';
import { useCounter } from '../../../hooks/useCounter';
import { useFetch } from '../../../hooks/useFetch';
jest.mock('../../../hooks/useFetch')
jest.mock('../../../hooks/useCounter')

describe('Tests in MultipleCustomHooks', () => { 

    beforeEach(()=>{
        useCounter.mockReturnValue({
            state: 10,
            increment: jest.fn(),
            decrement: jest.fn(),
            reset: jest.fn(),
        })
    })
    
    
    test('should show successful', () => {
      
//Usamos mock para devolver data falsa, ya que no nos interesa la data real, solo 
//el funcionamiento de los hooks
        useFetch.mockReturnValue({
            data:null,
            loading:true,
            error:null
        })
        const wrapper = renderer.create(<MultipleCustomHooks/>).toJSON()
        expect(wrapper).toMatchSnapshot();

     })
    
    test('should show information',()=>{

        useFetch.mockReturnValue({
            data:[{
                author:"Barry",
                quote:"Hello World"
            }],
            loading:false,
            error:null
        })
        const {container}= render(<MultipleCustomHooks/>)
        expect(container.querySelector('.alert')).toBeNull()
        expect(screen.queryByRole('alert',{name:'Loading...'})).toBeNull()
        expect(container.querySelector('.mb-0').textContent).toBe('Hello World')
        expect(container.querySelector('footer').textContent).toBe('Barry')
        console.log(container.outerHTML)
    })

 })