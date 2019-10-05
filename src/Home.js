import React  from 'react';
import Feed from './Feed';
import Jumbotron from './Jumbotron';
import RegistrationForm from './RegistrationForm'
import LoginForm from './LoginForm'
import './App.css';

const Home = (prop) => {
  return (
      <div className="App">
          <Jumbotron 
            title="Newsletter"
            lead="This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."
            description="This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."
          />
         <Feed />
         <LoginForm />
      </div>
  );
}

export default Home;
