describe('All tests of demo.test.js',()=>{
    test('the string must be the same', () => { 

        //1
        const message ="Hello world";
    
        //2
    
        const message2 ='Hello world';
    
        //3
        expect(message).toBe(message2);
        
        
     })
})

