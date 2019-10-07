import React, { useState, useEffect, useContext }  from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact'
import NavBar from './NavBar'
import AppContext from './AppContext.js'
import './App.css'

const Main = () => {

    const [globalState, setGlobalState] = useState(
        { 
            loggedIn: localStorage.getItem('token') ? true : false,
            userForm: null,
            users: [
              'Jim',
              'Jane',
              'Mohammad',
              'Mary'
            ],
            feed: [
              {user: 'Jim', comment: 'This comment is from Jim'},
              {user: 'Jane', comment: 'Going to tennis practice tonight'},
              {user: 'Mohammad', comment: 'Big traffic near dubai'},
              {user: 'Mary', comment: 'Graduating in 1 week! #exicted'},
            ]
        }
    );

    useEffect(()=>{
        if(!localStorage.getItem('token') && globalState.loggedIn) {
            localStorage.setItem('token', globalState.token);
            setGlobalState({ 
                ...globalState,
                userForm: null
            })
        }

        if(!globalState.loggedIn) {
            localStorage.removeItem('token');
        }
    });

    const LayoutRoute = ({ location, path, exact, component }) => {
        return (
            <div>
                <NavBar 
                    location={location.pathname} 
                    logo="XYZ Company"/>
                <Route path={path} exact={exact} component={component} />
                <footer>
                    2019 mywebsite.com
                </footer>
            </div>
        )
    }

    const PrivateRoute = ({ component: Component, ...restOfProps }) => {

        const [globalState] = useContext(AppContext);        
        return (
            <Route 
            {...restOfProps}
            render={
                // Check to see if user is logged in
                (props) => globalState.token || localStorage.getItem('token') ? 
                // If yes, render the component
                ( <Component {...props} />) : 
                // Otherwise, redirect to /sign-in
                ( <Redirect
                    to={{
                        pathname: '/sign-in',
                    }}
                />)
            
            }
        />)
    }

    return (  
        <AppContext.Provider value={[globalState, setGlobalState]}>
            <BrowserRouter>
                <Switch>
                    <LayoutRoute path="/" exact component={Home} />
                    <LayoutRoute path="/about" component={About} />
                    <PrivateRoute path="/contact" component={Contact} />
                </Switch>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default Main;