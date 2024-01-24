import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { SearchScreen } from '../../../components/search/SearchScreen';

describe('Tests in <SearchScreen/> component', () => { 

    test('should show successfuly', () => { 

        const wrapper = renderer.create(
            <MemoryRouter initialEntries={['/search']}>
                <SearchScreen/>
            </MemoryRouter>
        )
            
        expect(wrapper).toMatchSnapshot();


     })
 })