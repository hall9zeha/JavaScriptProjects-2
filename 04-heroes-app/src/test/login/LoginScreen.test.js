import renderer from 'react-test-renderer';
import { AuthContext } from '../../auth/authContext';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { LoginScreen } from '../../components/login/LoginScreen';
import { Types } from '../../types/Types';


const mockNavigate= jest.fn();//Importante poner el nombre 'mock' delante del hook o funcion que querramos falsea de lo contrario no funcionará

jest.mock('react-router-dom',()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate:() => mockNavigate,
}))


describe('Tests in <LoginScreen/> component', () => { 

    const contextValue = {
        dispatch:jest.fn(),
        user:{
             logged:false
        }
    }
    const wrapper = renderer.create(
        <AuthContext.Provider value={contextValue}>
             <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path='/' element={<LoginScreen/>}/>
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>
    )
    test('should show successfully', () => { 
       
        expect(wrapper).toMatchSnapshot();
     })
    test('should execute the dispatch and navigation',()=>{
        const btnClickEvent = wrapper.root.findByType('button');
        //Ejecutamos el evento click en el botón Login
        btnClickEvent.props.onClick();

        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type:Types.login,
            payload:{name:'Martha'}
        })//Este debe ser el resultado al hacer click

        //Comprobamos que el navigation nos redirija a la página que hayamos designado
        //en este caso es /marvel
        expect(mockNavigate).toHaveBeenCalledWith('/marvel',{'replace':true})
        
        //Simulamos que la última página visitada haya sido la de /dc
        localStorage.setItem('lastPath','/dc')

        btnClickEvent.props.onClick();
        //Comprobamos que el navigation nos redireccione hacia ella
        expect(mockNavigate).toHaveBeenCalledWith('/dc',{replace:true})

    })
 })