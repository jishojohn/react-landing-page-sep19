import React from 'react';

const Modal = (prop) => {

    return(
        <div className="modal-container">
            <div className="modal">
                <button 
                onClick={prop.modalCloseHandler}
                className="btn btn-danger">Close</button>

                {prop.children}
            </div>
        </div>
    )
}

export default Modal;