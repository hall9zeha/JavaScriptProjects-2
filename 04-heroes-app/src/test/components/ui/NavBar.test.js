import renderer from 'react-test-renderer';
import { AuthContext } from '../../../auth/authContext';
import { AppRouter } from '../../../routers/AppRouter';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../../components/ui/NavBar';
import { Types } from '../../../types/Types';

const mockNavigate= jest.fn();//Importante poner el nombre 'mock' delante del hook o funcion que querramos falsea de lo contrario no funcionará

jest.mock('react-router-dom',()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate:() => mockNavigate,
}))

describe('Tests in <NavBar/> component', () => {

    const contextValue={
        dispatch:jest.fn(),
        user:{
            name:'Martha',
            logged:true
        }
    }

    const wrapper = renderer.create(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path='/' element={<Navbar/>}/>
                </Routes>
            </MemoryRouter>
         
        </AuthContext.Provider>
    )
    test('should show successfuly', () => { 
       
        
        expect(wrapper.toJSON()).toMatchSnapshot()
        //const infoUser = wrapper.root.findByProps({className:'nav-item nav-link text-info'});
        const info = wrapper.root.findByType('span')
        expect(info.children[0]).toBe('Martha')
     })
     test('should call logout, call to navigate and dispatch with args',()=>{
        const button = wrapper.root.findByType('button');
        button.props.onClick()
        expect(contextValue.dispatch).toHaveBeenCalledWith({type:Types.logout})
        expect(mockNavigate).toHaveBeenCalledWith('/login',{replace:true})
     })
 })