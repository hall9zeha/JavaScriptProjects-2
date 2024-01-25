import renderer from 'react-test-renderer';
import { AuthContext } from '../../../auth/authContext';
import { AppRouter } from '../../../routers/AppRouter';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../../components/ui/NavBar';

describe('Tests in <NavBar/> component', () => {

    test('should show successfuly', () => { 
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
        expect(wrapper.toJSON()).toMatchSnapshot()
        //const infoUser = wrapper.root.findByProps({className:'nav-item nav-link text-info'});
        const info = wrapper.root.findByType('span')
        expect(info.children[0]).toBe('Martha')
     })
     test('should call logout, call to navigate and dispatch with args',()=>{

     })
 })