import React, { useState } from 'react';

const ColorButton = () => {

    const [state, setState] = useState(
        {
            class: "btn-primary",
            label: "save"
        }
    )

    const clickHandler = () => {
        setState({
            class: "btn-success",
            label: "done"
        })
    }

    return (
        <button onClick={clickHandler}
        className={`btn ${state.class}`}>{state.label}</button>
    )
}

export default ColorButton;