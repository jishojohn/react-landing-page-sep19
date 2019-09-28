import React, { useState }  from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import About from './About';
import AppContext from './AppContext.js'


const Main = () => {

    const [globalState, setGlobalState] = useState(
        { 
            loggedIn: true,
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

    return (
        <AppContext.Provider value={[globalState, setGlobalState]}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/about" component={About} />
                </Switch>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default Main;