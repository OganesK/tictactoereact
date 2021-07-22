import React from "react";
import "E:/Projects/tictactoereact/src/styles/square.scss"
import "E:/Projects/tictactoereact/src/styles/button.scss"

const Square = ({value, onClick}) => {
    return (
    <button type="button" className='square' onClick={onClick}>
        {value}
    </button>
    );
};

export default Square;