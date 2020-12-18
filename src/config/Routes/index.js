import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Login, MainApp, Register } from '../../page'

const Routes = () => {   
        return (
            <Router>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/> 
                    <Route path='/' component={MainApp}/>        
                </Switch>
            </Router>
        )
    
}

export default Routes
