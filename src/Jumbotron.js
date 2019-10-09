import React, { useState } from 'react';
import Modal from './Modal';
import { validateEmail } from './utils';

const Jumbotron = (prop) => {

    const [state, setState] = useState(
        { emailValid: null },
    );

    // Above code is short for the following: 
    // const reactArray = useState(false); // [false, setSubscribed]
    // const subscribed = reactArray[0];
    // const setSubscribed = reactArray[1]

    let emailField; // This will be the input field when React renders

    const subsribeUser = () => {
        if(!validateEmail(emailField.value)) {
            setState({ emailValid: 'invalid' })
        } else {
            setState({ emailValid: 'valid' })
        }
    }

    return (
        <div className="jumbotron">
            <div className="container">
                <h1 className="display-4">{prop.title}</h1>
                <p className="lead">{prop.lead}</p>
                <hr className="my-4" />
                <p>{prop.description}</p>

                <div className="form-row align-items-center">
                    <div className="col-auto my-1 col-sm-4">
                        <input 
                        ref={ (inputField)=>{ emailField = inputField } }
                        placeholder="Enter email address" type="text" className="form-control"/>
                    </div>
                    <div className="col-auto my-1">   
                    {
                        state.emailValid !== "valid" &&
                        <a href="#"
                        id="Newsletter"
                        onClick={subsribeUser}
                        type="submit"
                        className="btn btn-primary">Subscribe</a>
                    }
                    </div>
                </div>

                {
                    state.emailValid === "valid" && 
                    <div className="alert alert-success" role="alert">
                        You've been subscribed successfully!
                    </div>
                }

                {
                    state.emailValid === "invalid" && 
                    <div className="alert alert-danger" role="alert">
                        Please enter a valid email address.
                    </div>
                }

                
            </div>
        </div>
    )
}

export default Jumbotron;