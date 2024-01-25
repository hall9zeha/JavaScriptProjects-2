import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { SearchScreen } from '../../../components/search/SearchScreen';

//Para fingir una llamada a nuestro useNavigate una vez hecho el submit en el formulario de buscar
//debemos de hacer un mock de react-router-dom pero devolviendo el mismo, y solo falseando useNavigate
const mockNavigate= jest.fn();//Importante poner el nombre 'mock' delante del hook o funcion que querramos falsea de lo contrario no funcionará

jest.mock('react-router-dom',()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate:() => mockNavigate,
}))

describe('Tests in <SearchScreen/> component', () => { 

    test('should show successfuly', () => { 

        const wrapper = renderer.create(
            <MemoryRouter initialEntries={['/search']}>
                <SearchScreen/>
            </MemoryRouter>
        )

        //Buscamos el elemento a través de su nombre de clase(es opcional)
        const info = wrapper.root.findByProps({className:'alert alert-info'});

        expect(wrapper).toMatchSnapshot();
        expect(info.children[0].trim()).toBe('Buscar un héroe')//Comprobamos que el texto del elemento coincida con lo que hayamos designado
        

     })
     test('should display to Batman and input value with queryString',()=>{
        const wrapper = renderer.create(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchScreen/>
            </MemoryRouter>
        )
        const input = wrapper.root.findByType('input')
        expect(input.props.value).toBe('batman')
     })
    test('should display  error if not found a hero',()=>{
        const forSearch = 'batman123'
        const wrapper = renderer.create(
            <MemoryRouter initialEntries={[`/search?q=${forSearch}`]}>
                <SearchScreen/>
            </MemoryRouter>
        )
        const input = wrapper.root.findByType('input')
        expect(input.props.value).toBe('batman123')

        const info = wrapper.root.findByProps({className:'alert alert-danger'});
        expect(info.children.join('')).toBe(`no hay resultados : ${forSearch}`)
    })  
    test('should call the navigate to new screen',()=>{
        const wrapper = renderer.create(
            <MemoryRouter initialEntries={['/search']}>
                <SearchScreen/>
            </MemoryRouter>
        )
        const input = wrapper.root.findByType('input')
        input.props.onChange({target:{name:'searchText',value:'batman'}})

        const form = wrapper.root.findByType('form')
        form.props.onSubmit({preventDefault(){}})
        //El useNavigate debe de haber sido llamado con el valor asignado a la query para mostrar la nueva pantalla
        expect(mockNavigate).toHaveBeenCalledWith('?q=batman')
    })
 })