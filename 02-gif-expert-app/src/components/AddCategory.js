import React, {useState} from 'react'
import PropTypes from 'prop-types';


export const AddCategory = ({setCategories}) => {
  //obtenemos la función enviada desde El componente GifExpertApp

  //Para que no nos de un error de undefined lo ponemos como vacío
  const [inputValue, setInputValue] = useState('');

  const handleInputChange =(e) =>{setInputValue(e.target.value);}

  const handleOnsubmit = (e)=>{
    e.preventDefault();
    if(inputValue.trim().length > 1){
    setCategories(cats=>[inputValue,...cats]);
    setInputValue('');
    }
    
  }
  return (
    // <> 
    // Si ya tenemos un contenedor de todos nuestros elementos como será el caso de nuestro formulario
    // ya no necesitaremos el fragment
    <form onSubmit={handleOnsubmit}>
     <input
        type='text'
        placeHolder='Search'
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
