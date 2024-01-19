import React from 'react';

import renderer from 'react-test-renderer';
import { LoginScreen } from '../../components/08-useContext/LoginScreen';
import { UserContext } from '../../components/08-useContext/UserContext';

describe('Tests in <LoginScreen/> component', () => { 

    const setUserMock = jest.fn();
    

    const userMock={
        id:2,
        name:'Martha',
        email:'martha@mail.com',
        sigIn:true
    }
    const wrapper = renderer.create(
        <UserContext.Provider value={{user:userMock, setUser:setUserMock}}>
            <LoginScreen/>
        </UserContext.Provider>);
        

    test('should show successfully', () => { 
        expect(wrapper).toMatchSnapshot();

     })

    test('should execute setUser function with same expected arg', async()=>{
      
        const container = renderer.create(
            <UserContext.Provider value={{user:userMock, setUser:setUserMock}}>
                <LoginScreen/>
            </UserContext.Provider>);
        await  container.root.findByType('button').props.onClick();
        expect(setUserMock).toHaveBeenCalledTimes(2)
        expect(setUserMock).toHaveBeenCalledWith(userMock)
      
    })
 })