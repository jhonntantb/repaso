import React from 'react';
import "../styleSheets/ButtonClear.css"

const ButtonClear = (props) => {
  return (
    <div className='button-clear' onClick={props.managementClear}>
    {props.children}
    </div>
  )
}

export default ButtonClear;