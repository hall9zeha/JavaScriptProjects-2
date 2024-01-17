import {render, renderHook, screen, waitFor, act, fireEvent} from '@testing-library/react';

import renderer from "react-test-renderer";
import RealExampleUseRef from '../../components/04-useRef/RealExampleUseRef';

describe('Tests in RealExampleUseRef', () => {

    test('should show successful',()=>{
        const wrapper = renderer.create(<RealExampleUseRef/>).toJSON();
        expect(wrapper).toMatchSnapshot();

    });

    test('should show the <MultipleCustomHooks/> component',()=>{
        
        render(<RealExampleUseRef/>);
        
        const btnShowComponent = screen.getByRole('button',{name:'Mostrar'});
        const childComponetHide = screen.queryByTestId('multiple-custom-hooks');      
        
        expect(childComponetHide).toBeNull()//La primera vez no debe mostrarse
        fireEvent.click(btnShowComponent);//Al hacer click en mostrar

        const childComponetShow = screen.queryByTestId('multiple-custom-hooks');
        
        expect(childComponetShow).toBeTruthy()//Debe mostrarse


        
    });
 })