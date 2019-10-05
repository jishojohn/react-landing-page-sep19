import React, { useState }  from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import About from './About';
import Contact from './Contact'
import NavBar from './NavBar'
import AppContext from './AppContext.js'

const Main = () => {

    const [globalState, setGlobalState] = useState(
        { 
            loggedIn: false,
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

    return (  
        <AppContext.Provider value={[globalState, setGlobalState]}>
            <BrowserRouter>
                <Switch>
                    <LayoutRoute path="/" exact component={App} />
                    <LayoutRoute path="/about" component={About} />
                    <LayoutRoute path="/contact" component={Contact} />
                </Switch>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default Main;