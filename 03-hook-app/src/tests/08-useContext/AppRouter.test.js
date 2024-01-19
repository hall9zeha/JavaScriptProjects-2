import React from "react";
import renderer from 'react-test-renderer'
import { AppRouter } from "../../components/08-useContext/AppRouter";
import { UserContext } from "../../components/08-useContext/UserContext";

describe('Tests in <AppRouter/> component', () => { 
    const userMock={
        id:1,
        name:'Barry',
        email:'barry@mail.com',
        sigIn:true
    }


    test('should show successfully',()=>{
        const wrapper = renderer.create(
            <UserContext.Provider value={{user:userMock}}>
                <AppRouter/>
            </UserContext.Provider>
        ).toJSON()

        expect(wrapper).toMatchSnapshot();
    })
})