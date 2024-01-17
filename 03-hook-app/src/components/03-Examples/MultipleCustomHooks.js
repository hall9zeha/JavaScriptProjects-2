
import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import '../02-useEffect/effects.css'
export const MultipleCustomHooks = () => {

  const {state, increment, decrement} = useCounter(1)//Para incrementar la cantidad de quotes que queremos obtener
  const {loading, data} =  useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${state}`); 
  const listQuotes = !!data && data //Si la data es diferente de nulo asignamos la respuesta a la constante listQuotes
   
  return (
    <div>
      <h3>BreakingBad quotes</h3>
      <hr/>
      <div  data-testid='multiple-custom-hooks'>
      {
        loading ? (
          <div className='alert alert-info text-center'>
            Loading...
          </div>
        ) : 
        (
          listQuotes.map(quote =>(
                  <blockquote key={Math.random()} className='blockquote float-end'>
                      <p  className='mb-0'>{quote.quote}</p>
                      <footer className='blockquote-footer'>{quote.author}</footer>
                  </blockquote>
          ))
         
        )
      }
      </div>
      {/* En este ejemplo, se ha añadido un div vacío con un estilo clear: both entre la lista de elementos y los botones. 
      Esto garantizará que los botones siempre se coloquen después del último elemento creado por el mapeo
      y no se superpongan a los elementos anteriores. */}
      <div style={{ clear: 'both' }}></div>
      <div className='mt-3'>
      <button onClick={()=>{increment(1)}} className='btn btn-primary'>Traer más</button>
      <button onClick={()=>{decrement(1)}} className='btn btn-primary ms-2'>Traer menos</button>
      </div>
     </div>
  )
}
