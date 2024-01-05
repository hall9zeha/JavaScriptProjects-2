import React from "react";
import {render, screen} from '@testing-library/react';
import renderer from 'react-test-renderer';
import { GifListItem } from "../../components/GifListItem";


describe('Tests in GifLisItem', () => { 
    test('should show GifListItem component successful', () => { 
        const titleTest = 'Family spy';
        const url='https//fakeurl.test.com/family.gif'

        const wrapper = renderer.create(<GifListItem title={titleTest} url={url}/>).toJSON();
        expect(wrapper).toMatchSnapshot();
     })
 })