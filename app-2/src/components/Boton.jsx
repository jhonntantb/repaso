import React from "react";
import "../styleSheets/Button.css"

const Button = ({ text, isClickButton, callbackClick }) => {
    return(
        <button 
            className={isClickButton ? "button-click":"button-reset"}
            onClick={callbackClick}
        >
            {text}
        </button>
    )
}

export default Button;