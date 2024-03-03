import React from 'react'
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


export const AppRouter = () => {
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
