import React from "react";
import renderer from "react-test-renderer";
import { AuthContext } from '../../auth/authContext'
import { AppRouter } from '../../routers/AppRouter'

describe('Tests in <AppRouter/> component', () => { 


    test('should show the login if isn t authenticated',()=>{
        
    const contextValue = {
        user:{
            logged:false
        }
        
    }
        const wrapper = renderer.create(
                    <AuthContext.Provider value={contextValue}>
                        <AppRouter/>
                    </AuthContext.Provider>)
       
        expect(wrapper.toJSON()).toMatchSnapshot();
    })
    test('should show heroes list if is authenticated',()=>{
        

    const contextValue = {
        user:{
            logged:true
        }
        
    }
        const wrapper = renderer.create(
                    <AuthContext.Provider value={contextValue}>
                        <AppRouter/>
                    </AuthContext.Provider>)
       const root = wrapper.root;
        expect(wrapper.toJSON()).toMatchSnapshot();
        expect(root.findByType('nav')).toBeTruthy()
    })
 })