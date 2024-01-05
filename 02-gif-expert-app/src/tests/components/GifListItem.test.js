import React from "react";
import {render, screen} from '@testing-library/react';
import renderer from 'react-test-renderer';
import { GifListItem } from "../../components/GifListItem";


describe('Tests in GifLisItem', () => { 
    test('should show GifListItem component successful', () => { 
        const wrapper = renderer.create(<GifListItem/>).toJSON();
        expect(wrapper).toMatchSnapshot();
     })
 })