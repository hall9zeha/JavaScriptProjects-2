import { MemoryRouter, BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { AuthContext } from '../../auth/authContext';
import { PrivateRoute } from '../../routers/PrivateRoute';

describe('Test in <PrivateRoute/> component', () => { 

    Storage.prototype.setItem = jest.fn();

    test('should show the component if is authenticated and save in localStorage',()=>{
        const contextValue = {
            user:{
                logged:true,
                name:'Barry'
            }
        }

        const wrapper = renderer.create(
            <AuthContext.Provider value = {contextValue}>
                <MemoryRouter initialEntries={['/']}>
                    <PrivateRoute>
                        <h1>Private component</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.root.findByType('h1').children[0].trim()).toBe('Private component')
        expect(localStorage.setItem).toHaveBeenCalledWith("lastPath","/")

    })
 })