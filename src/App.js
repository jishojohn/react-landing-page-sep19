import React  from 'react';
import Feed from './Feed';
import Jumbotron from './Jumbotron';
import RegistrationForm from './RegistrationForm'
import './App.css';

const App = (prop) => {
  return (
      <div className="App">
          <Jumbotron 
            title="Newsletter"
            lead="This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."
            description="This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."
          />
         <Feed />
         <RegistrationForm />
      </div>
  );
}

export default App;
