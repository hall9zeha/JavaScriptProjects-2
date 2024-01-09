import React from "react";
import renderer from 'react-test-renderer';
import { GifList } from "../../components/GifList";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');//

describe('testing in <GifList/> component', () => { 

    //Simulamos la carga de imágenes con un mockReturnValue
    useFetchGifs.mockReturnValue({
        data:[],
        loading:true
    });

    const category = 'Scavengers reign';
    const wrapper = renderer.create(<GifList category={category}/>);
    test('should show component successful', () => { 
        const component = wrapper.toJSON();
        expect(component).toMatchSnapshot();
     })

     test('shuld show items when are loading with useFetchGifs',()=>{
        const gifs = [{
            id:'A123',
            url:'https://fkeurl.com/fakeimg.jpg',
            title:'Levi'
        }]

        useFetchGifs.mockReturnValue({
            data:gifs,
            loading:false
        });

        const wrapper = renderer.create(<GifList category={category}/>);

        expect(wrapper).toMatchSnapshot();

        const element = wrapper.root.findAllByProps({className:'loading'});
        //Evaluamos si el párrafo que muestra el loading no existe
        expect(element).toHaveLength(0);


     });
 })