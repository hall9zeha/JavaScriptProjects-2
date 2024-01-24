import renderer from 'react-test-renderer';
import { DashboardRoutes } from '../../routers/DashboardRoutes';
import { AuthContext } from '../../auth/authContext';
import { MemoryRouter } from 'react-router-dom';

describe('Tests in <DashboardRoutes/> component', () => { 
    const contextValue = {
        user:{
            logged:true,
            name:"Diana"
        }
    }

    test('should show successfuly', () => { 
        //MemoryRouter nos ayuda a proveer el contexto necesario para usar el componente Navigation()
        //en nuestras pruebas
        const wrapper = renderer.create(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                <DashboardRoutes/>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        const span = wrapper.root.findByType('span');
        expect(span.props.children).toBe('Diana')
        expect(wrapper.toJSON()).toMatchSnapshot()
     })

     test('should show DCScreen', () => { 
        //MemoryRouter nos ayuda a proveer el contexto necesario para usar el componente Navigation()
        //en nuestras pruebas
        const wrapper = renderer.create(
            // Para probar url con initialEntries
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/dc']}>
                <DashboardRoutes/>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        const span = wrapper.root.findByType('h1');
        expect(span.props.children).toBe('DCScreen')
        expect(wrapper.toJSON()).toMatchSnapshot()
     })
 })