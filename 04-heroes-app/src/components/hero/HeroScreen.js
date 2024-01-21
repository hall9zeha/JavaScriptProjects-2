import { Navigate, useParams } from "react-router-dom"
import { getHeroById } from "../../selectors/getHeroById";


export const HeroScreen = () => {
  const {heroId} = useParams();
  const hero=getHeroById(heroId)
 
  //Si se retorna undefine por alguna razón redireccionamos a la raíz
  if(!hero){
    return <Navigate to='/' />
  }
  return (
    <div>
        <h1>HeroScreen</h1>
              
    </div>
  )
}
