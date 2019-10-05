import React, { useContext }  from 'react';
import Feed from './Feed';
import Jumbotron from './Jumbotron';
import RegistrationForm from './RegistrationForm'
import LoginForm from './LoginForm'
import AppContext from './AppContext'
import Modal from './Modal'
import './App.css';

const Home = (prop) => {

  const [globalState, setGlobalState] = useContext(AppContext);

  const modalCloseHandler = () => {
    setGlobalState({ 
      ...globalState,
      userForm: null
    })
  }

  return (
      <div className="App">
          <Jumbotron 
            title="Newsletter"
            lead="This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."
            description="This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."
          />
         <Feed />

         { 
            globalState.userForm === null && 
            <div className="container">
              <h2>You need to be logged in</h2> 
            </div>
         }
         { globalState.userForm === "login" && 
            <Modal modalCloseHandler={modalCloseHandler}>
              <LoginForm />
            </Modal>
          }

         { 
           globalState.userForm === "registration" && 
            <Modal modalCloseHandler={modalCloseHandler}>
              <RegistrationForm />
            </Modal>
        }

      </div>
  );
}

export default Home;
