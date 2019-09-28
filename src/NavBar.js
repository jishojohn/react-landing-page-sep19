import React, { useContext } from 'react';
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
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div>
                <a href="#">{prop.logo}</a>       
            </div>

            <div className="btn-group">
              <Link onClick={()=>alert("Clicked")} to="/" className="btn btn-primary">Home</Link>
              <Link to="/about" className="btn btn-primary">About</Link>
              <Link className="btn btn-primary">Contact</Link>
            </div>

            <LoginGroup />
        </nav>
    )
}

export default NavBar;