import React from 'react';
import renderHook, {act, waitFor,render, screen} from '@testing-library/react';
import renderer from 'react-test-renderer';
import { HomeScreen } from '../../components/08-useContext/HomeScreen';
import { UserContext } from '../../components/08-useContext/UserContext';

describe('Test in <HomeScreen/> component', () => { 

    const userMock={
        id:1,
        name:'Barry',
        email:'barry@mail.com',
        sigIn:true
    }
    const wrapper = renderer.create(
        //Nuestro componente HomeScreen requiere un objeto de tipo "User"(o cualquiera que hayamos definido) que es proveido por 
        //UserContext así que le enviaremos un objeto también para la prueba
            <UserContext.Provider value={{user:userMock}}>
                <HomeScreen/>
            </UserContext.Provider>
    );

    test('should show successfully',()=>{
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

 })