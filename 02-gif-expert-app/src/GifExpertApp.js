
import React, { memo, useState } from 'react'
import { AddCategory } from './components/AddCategory';

import { GifList } from './components/GifList';



export const GifExpertApp = (({defaultCategories = []}) => {

  const [categories, setCategory] = useState(defaultCategories);

  
  // const handleAdd = (e)=>{
  //   setCategory([...categories,e]);//mantenemos el arreglo anterior y agregamos la nueva categoría al presionar el botón
  // }

  return (
    <>

    <h2>GifExpertApp</h2>
    <AddCategory setCategories={setCategory}/>
    <hr/>
    
    <ol>
      {
        categories.map(category =>
           <GifList 
           key={category}
           category={category}/>
        )
      }
    </ol>
    </>
    
  )
})

export default GifExpertApp