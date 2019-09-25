import React, { useState, useEffect }  from 'react';
import NavBar from './NavBar';
import Feed from './Feed';
import Jumbotron from './Jumbotron';
import './App.css';
import AppContext from './AppContext.js'

const App = () => {

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
            {user: 'Mary', comment: 'Graduating in 1 week! #exicted'}
          ]
      }
  );

  return (
    <AppContext.Provider value={[globalState, setGlobalState]}>
      <div className="App">
          <NavBar 
            logo="MyCompany"
          />
          <Jumbotron 
            title="Newsletter"
            lead="This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."
            description="This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."
          />

         <Feed />
      </div>
    </AppContext.Provider>
  );
}

export default App;
