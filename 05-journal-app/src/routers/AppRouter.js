import React, { useEffect, useState } from 'react'
import {firebase} from '../firebase/firebaseConfig'
/*
Ya que react router 5 es todavía muy utilizado este proyecto implementará dicha versión
para aprender el manejor de las rutas con la misma.
Al momento de realizar este proyecto la versión más reciente era 6.22
*/
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { PrivateRoute } from './PrivateRoute';
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { loadNotes } from '../helpers/loadNotes';
import { setNotes, startLoadingNotes } from '../actions/notes';


export const AppRouter = () => {

    const dispatch = useDispatch();
    const [cheking, setCheking] = useState(true);
    const [isLogged, setIsLogged] = useState(false);

    // Observador que mostrara los estados de autenticación de firebase cuando estos cambien (login or logout)
    // nos devolverá el objeto correspondiente (user credentials or null)
    useEffect(()=>{
        firebase.auth().onAuthStateChanged(async (user)=>{
            // Si el usuario no es nulo
            if(user?.uid){
                dispatch(login(user.uid,user.displayName));
                setIsLogged(true)
                dispatch(startLoadingNotes(user.uid));  

            }else{
                setIsLogged(false)
            }
            // Si deveulve datos de usuario correctamente la espera se detendrá 
            setCheking(false);   
        })
    }, [dispatch,setCheking])//[] Dependencias vacías para que se ejecute una sola vez si se vuelve a renderizar algún componente o
    // ya que dispatch y setChecking no van a cambiar tampoco se ejecutará nuevamente nustro observable, podemos incluirlos dentro [.]
    
    //Para mostrar las vistas principales esperamos a la comprobación de si estamos autenticados o no
    if(cheking){
        return (
            <h1>Espere...</h1>
        )
    }
  return (
    <Router>
        <div>
            <Switch>
                <PublicRoute
                    path="/auth"
                    component={AuthRouter}
                    isAuthenticated={isLogged}
                />
                <PrivateRoute
                    isAuthenticated={isLogged}
                    exact
                    path="/"
                    component={JournalScreen}
                />
                <Redirect to="/auth/login"/>
            </Switch>
        </div>
       
    </Router>
  )
}
