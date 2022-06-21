import React from 'react'
import '../styleSheets/Button.css';

const Button = (props) => {

  const isOperator = (valor) => {
    return isNaN(valor) && (valor !== ".") && (valor !== "=")
  };
  return (
    <div
      className={`button-conteiner ${isOperator(props.children)? "operator" : ""}`.trimEnd()}
      onClick={()=>props.managementClick(props.children)}
    >
        {props.children}
    </div>
  )
}

export default Button;