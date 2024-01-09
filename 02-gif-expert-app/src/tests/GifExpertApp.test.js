import React from 'react';
import renderer from 'react-test-renderer';
import { GifList } from '../components/GifList';

import GifExpertApp from '../GifExpertApp';

describe('test in <GifExpertApp/> component', () => { 
    
    const wrapper = renderer.create(<GifExpertApp/>).toJSON()

    test('should show successful', () => { 
        expect(wrapper).toMatchSnapshot();
    });

    test('should show a category list',()=>{
        const categories = ['Boku no hero', 'Komi san'];
        const wrapper = renderer.create(<GifExpertApp defaultCategories={categories}/>);

        expect(wrapper).toMatchSnapshot();
        const gridGifs = wrapper.root.findAllByProps({className:'card-grid'});
        expect(gridGifs).toHaveLength(categories.length)
    });
})