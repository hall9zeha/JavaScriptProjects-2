import React from 'react'
import { renderHook } from "@testing-library/react"
import renderer from 'react-test-renderer'
import { useFetchGifs } from "../../hooks/useFetchGifs"

describe('test in useFetchGifs hook', () => { 

    test('should return a initial state', () => { 
        const response = renderHook(()=> useFetchGifs('Violet Evergarden'));
        console.log(response);
     })
 })