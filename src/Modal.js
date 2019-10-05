import React from 'react';

const Modal = (prop) => {

    return(
        <div onClick={prop.modalCloseHandler} className="modal-container">
            <div onClick={(e)=>e.stopPropagation()} className="modal">
                <button 
                onClick={prop.modalCloseHandler}
                className="btn btn-danger">Close</button>

                {prop.children}
            </div>
        </div>
    )
}

export default Modal;