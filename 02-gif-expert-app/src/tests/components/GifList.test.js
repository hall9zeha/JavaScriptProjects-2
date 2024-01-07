import React from "react";
import renderer from 'react-test-renderer';
import { GifList } from "../../components/GifList";


describe('testing in <GifList/> component', () => { 

    const wrapper = renderer.create(<GifList/>);
    test('should show component successful', () => { 
        const component = wrapper.toJSON();
        expect(component).toMatchSnapshot();
     })
 })