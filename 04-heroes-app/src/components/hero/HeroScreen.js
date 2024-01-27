import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../../selectors/getHeroById";
import { useMemo } from "react";
import { heroImages } from "../../helpers/HeroImages";


export const HeroScreen = () => {
  const {heroId} = useParams();
  const navigate = useNavigate();

  //Solo se llamará una vez gracias  a useMemo y se volverá a llamar si por alguna razón cambia heroId
  const hero= useMemo(()=> getHeroById(heroId),[heroId])

  const handleReturn = ()=>{
    //-1 navega a la pantalla anterior dentro del historial
    navigate(-1)
  }
  //Si se retorna undefine por alguna razón redireccionamos a la raíz
  if(!hero){
      return <Navigate to='/' />
    
  }

  const  {
    id,
    superhero, 
    publisher, 
    alter_ego,
    first_appearance,
    characters
  } = hero;

  //const imagePath = `/assets/${id}.jpg`; //old way

 // const imagePath = heroImages(`${id}.jpg`)

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={heroImages(`./${id}.jpg`)}
              alt={superhero}
              className="img-thumbnail animate__animated animate__fadeInLeft"/>
      </div>
      <div className="col-8 animate__animated animate__fadeIn">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush ">
          <li className="list-group-item"><b>Alter ego:</b>{alter_ego}</li>
          <li className="list-group-item"><b>Publisher:</b>{publisher}</li>
          <li className="list-group-item"><b>First Appearance:</b>{first_appearance}</li>
        </ul>
        <h5 className="mt-3">Characters</h5>
       <p>{characters}</p>
        <button className="btn btn-outline-info"
                onClick={handleReturn}
                >
          Regresar
        </button>
      </div>
              
    </div>
  )
}
