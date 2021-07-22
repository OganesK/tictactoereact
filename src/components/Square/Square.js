import React from "react";
import "./square.scss"
import "./button.scss"

const Square = ({value, onClick}) => {
    return (
    <button type="button" className='square' onClick={onClick}>
        {value}
    </button>
    );
};

export default Square;