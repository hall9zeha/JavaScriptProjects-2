import {React, useState} from 'react'

export default function AddCategory() {

  const [inputValue, setInputValue] = useState('Hola mundo');
  
  const handleInputChange =(e) =>{
    setInputValue(e.target.value);
  }

  return (
    <>
    <input
        type='text'
        value={inputValue}
        onChange={handleInputChange}
    />
    </>
    
  )
}
