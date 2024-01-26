import renderer from 'react-test-renderer';
import { AuthContext } from '../../auth/authContext';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { LoginScreen } from '../../components/login/LoginScreen';

describe('Tests in <LoginScreen/> component', () => { 

    const contextValue = {
        dispatch:jest.fn(),
        user:{
            name:'Barry',
            logged:false
        }
    }
    test('should show successfully', () => { 
        const wrapper = renderer.create(
            <AuthContext.Provider value={contextValue}>
                 <MemoryRouter initialEntries={['/']}>
                    <Routes>
                        <Route path='/' element={<LoginScreen/>}/>
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        expect(wrapper).toMatchSnapshot();
     })
 })