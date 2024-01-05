import React from "react";
import {render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { GifListItem } from "../../components/GifListItem";


describe('Tests in GifLisItem', () => { 

    const titleTest = 'Family spy';
    const url='https//fakeurl.test.com/family.gif'

    const wrapper = renderer.create(<GifListItem title={titleTest} url={url}/>).toJSON();

    test('should show GifListItem component successful', () => { 
       
        expect(wrapper).toMatchSnapshot();
     })
    test('should have a title', () => { 
       render(<GifListItem title={titleTest} url={url}/>)
       expect(screen.getByText(titleTest)).toBeInTheDocument();
       
     })

     test('should have a image component with "url" and "alt" props', () => { 
        render(<GifListItem title={titleTest} url={url}/>)
        expect(screen.getByRole("img")).toHaveAttribute('src',url);
        expect(screen.getByRole("img")).toHaveAttribute('alt',titleTest);
       
      })

      test('should have a animate__bounceInLeft in div', () => { 
        const {container }=render(<GifListItem title={titleTest} url={url}/>)
            
        expect(container.firstChild).toHaveClass('animate__bounceInLeft');
        
       
      })
 }) 