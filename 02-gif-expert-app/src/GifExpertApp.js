
import React, { memo, useState } from 'react'
import AddCategory from './components/AddCategory';



const GifExpertApp = memo(() => {

  const [categories, setCategory] = useState(['One punch', 'Violet Evergarden', 'Scavengers Reign']);

  // const handleAdd = (e)=>{
  //   setCategory([...categories,e]);//mantenemos el arreglo anterior y agregamos la nueva categoría al presionar el botón
  // }

  return (
    <>

    <h2>GifExpertApp</h2>
    <AddCategory/>
    <hr/>
    
    <ol>
      {
        categories.map(category =>{
            return <li key={category}>{category}</li>
        })
      }
    </ol>
    </>
    
  )
})

export default GifExpertApp