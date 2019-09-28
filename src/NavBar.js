import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from './AppContext';

const LoginGroup = () => {
    const [globalState, setGlobalState] = useContext(AppContext);

    const logOutUser = () => {
        setGlobalState({ ...globalState, loggedIn: false })
    }

    if(globalState.loggedIn) {
        return (
            <div>
                <div>Welcome back, {globalState.userName}</div>
                <button onClick={logOutUser} 
                className="btn btn-primary">Log Out</button>
            </div>
        )
    } else {
        return (
            <div>
                <button className="btn btn-primary">Register</button>
                <button className="btn btn-primary">Log In</button>
            </div>
        )
    }
    
}

const NavBar = (prop) => {

    const [state] = useState({
        home: prop.location === '/' ? 'btn-success' : 'btn-primary',
        about: prop.location === '/about' ? 'btn-success' : 'btn-primary',
        contact: prop.location === '/contact' ? 'btn-success' : 'btn-primary',
    });

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div>
                <a href="#">{prop.logo}</a>       
            </div>

            <div className="btn-group">
              <Link to="/" className={`btn ${state.home}`}>Home</Link>
              <Link to="/about" className={`btn ${state.about}`}>About</Link>
              <Link to="/contact" className={`btn ${state.contact}`}>Contact</Link>
            </div>

            <LoginGroup />
        </nav>
    )
}

export default NavBar;