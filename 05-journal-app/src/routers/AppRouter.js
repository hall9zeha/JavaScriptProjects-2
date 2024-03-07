import React, { useEffect } from 'react'
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
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';


export const AppRouter = () => {

    const dispatch = useDispatch();

    // Observador que mostrara los estados de autenticación de firebase cuando estos cambien (login or logout)
    // nos devolverá el objeto correspondiente (user credentials or null)
    useEffect(()=>{
        firebase.auth().onAuthStateChanged((user)=>{
            // Si el usuario no es nulo
            if(user?.uid){
                dispatch(login(user.uid,user.displayName));
            }
        })
    }, [])//[] Dependencias vacías para que se ejecute una sola vez si se vuelve a renderizar algún componente

  return (
    <Router>
        <div>
            <Switch>
                <Route
                    path="/auth"
                    component={AuthRouter}
                />
                <Route
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
