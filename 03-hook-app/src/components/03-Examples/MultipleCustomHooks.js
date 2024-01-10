
import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import '../02-useEffect/effects.css'
export const MultipleCustomHooks = () => {

  const state =  useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/5`); 
 
    console.log(state);
  return (
    <h3>MultipleCustomHooks</h3>
  )
}
