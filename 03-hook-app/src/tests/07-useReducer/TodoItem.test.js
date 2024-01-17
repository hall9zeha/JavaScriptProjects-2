import renderer from 'react-test-renderer';
import { TodoItem } from '../../components/07-useReducer/TodoItem';
import { todos } from '../../fixtures/DemoTodos';

describe('Tests in <TodoItem/> Component', () => { 
    const handleDeleteMocked = jest.fn();
    const handleDoneTaskMocked = jest.fn();
    test('should show  successful', () => { 
        const wrapper = renderer.create(<TodoItem todo={todos} 
            index = {0} 
            handleDelete={handleDeleteMocked}
            handleDoneTask={handleDoneTaskMocked}/>).toJSON()
        expect(wrapper).toMatchSnapshot();
     })

 })