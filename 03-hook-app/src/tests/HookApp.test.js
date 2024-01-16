import renderer from "react-test-renderer";
import { HookApp } from "../HookApp";

describe('Tests in <HookApp/> component', () => { 

    test('should show HookApp successful', () => { 
        const wrapper = renderer.create(<HookApp/>).toJSON();
        expect(wrapper).toMatchSnapshot();
     })

 });