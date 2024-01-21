import React, { useMemo } from 'react'
import queryString from 'query-string'
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../hero/HeroCard'
import { getHeroByName } from '../../selectors/getHeroByName'
import { useLocation, useNavigate } from 'react-router-dom'

export const SearchScreen = () => {

  const location = useLocation();
  //Leemos la query de búsqueda contenida en location gracias a la librería "npm install query-string" 
  const {q=''} = queryString.parse(location.search)

  const [formValues, handleInputChange] = useForm({searchText:q})
  const {searchText} = formValues;

  const heroesFiltered = useMemo(()=> getHeroByName(q),[q])
  const navigate = useNavigate();



  const handleSearch=(e)=>{
    e.preventDefault()
    console.log(searchText)
    navigate(`?q=${searchText}`)
  }

 

  return (
    <>
     <h1>Búsquedas</h1>
     <hr/>
     <div className='row'>
        <div className='col-5'>
          <h4>Buscar</h4>
          <form onSubmit={handleSearch}>
            <input type='text' placeholder='Buscar un héroe'
                    className='form-control'
                    name='searchText'
                    autoComplete='off'
                    value={searchText}
                    onChange={handleInputChange}
                    />
            <button className='btn btn-outline-primary mt-1 ' type='submit'>
                Buscar
            </button>
          </form>
        </div>
        <div className='col-7'>
          <h4>Resultados</h4>
          <hr/>
          {
            (q ==='')
            ? <div className='alert alert-info'> Buscar un héroe</div>
            :(heroesFiltered.length ===0)
            && <div className='alert alert-danger'> no hay resultados : {q}</div>
          }
          {
            heroesFiltered.map(hero=>(
              <HeroCard 
                key={hero.id}
                {...hero}
              />
            ))
          }
        </div>
     </div>
    </>
  )
}
