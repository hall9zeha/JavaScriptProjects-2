import React from "react";
import renderer from 'react-test-renderer';
import { GifList } from "../../components/GifList";


describe('testing in <GifList/> component', () => { 

    const category = 'Scavengers reign';
    const wrapper = renderer.create(<GifList category={category}/>);
    test('should show component successful', () => { 
        const component = wrapper.toJSON();
        expect(component).toMatchSnapshot();
     })
 })