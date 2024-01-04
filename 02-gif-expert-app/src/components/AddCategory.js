import {React, useState} from 'react'
import PropTypes from 'prop-types';

export default function AddCategory({setCategories}) {//obtenemos la función enviada desde El componente GifExpertApp

  const [inputValue, setInputValue] = useState('');//Para que no nos dé un error de undefined al dejar vacío nuestro estado lo ponemos como vacío
  
  const handleInputChange =(e) =>{
    setInputValue(e.target.value);
  }
  const handleOnsubmit = (e)=>{
    e.preventDefault();
    if(inputValue.trim().length > 1){
    setCategories(cats=>[...cats, inputValue]);
    }
    setInputValue('');
  }
  return (
    // <> 
    // Si ya tenemos un contenedor de todos nuestros elementos como será el caso de nuestro formulario
    // ya no necesitaremos el fragment
    <form onSubmit={handleOnsubmit}>
    <input
        type='text'
        value={inputValue}
        onChange={handleInputChange}
    />
    </form>
    //</>
    
  )
}
AddCategory.propTypes={
    setCategories:PropTypes.func.isRequired
}
