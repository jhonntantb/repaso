import './App.css';
import { useState } from "react"
import freecodecampLogo from "./images/freecodecamp-logo.png";
import Screen from './components/Screen';
import Button from "./components/Button";
import ButtonClear from "./components/ButtonClear";
import { evaluate } from "mathjs";

function App() {

  const [input, setInput] = useState('');

  const handleInput = val => {
    setInput(input + val);
  };

  const calculateResult = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Please enter values ​​to perform calculations.");
    }
  };
  return (
    <div className="App">
      <div className="freecodecamp-logo-conteiner">
        <img
          className="freecodecamp-logo"
          src={freecodecampLogo}
          alt="logo freecodecamp"
        />
      </div>
      <div className='calculator-conteiner'>
        <Screen input={input} />
        <div className='row'>
          <Button managementClick={handleInput}>1</Button>
          <Button managementClick={handleInput}>2</Button>
          <Button managementClick={handleInput}>3</Button>
          <Button managementClick={handleInput}>+</Button>
        </div>
        <div className='row'>
          <Button managementClick={handleInput}>4</Button>
          <Button managementClick={handleInput}>5</Button>
          <Button managementClick={handleInput}>6</Button>
          <Button managementClick={handleInput}>-</Button>
        </div>
        <div className='row'>
          <Button managementClick={handleInput}>7</Button>
          <Button managementClick={handleInput}>8</Button>
          <Button managementClick={handleInput}>9</Button>
          <Button managementClick={handleInput}>*</Button>
        </div>
        <div className='row'>
          <Button managementClick={calculateResult}>=</Button>
          <Button managementClick={handleInput}>0</Button>
          <Button managementClick={handleInput}>.</Button>
          <Button managementClick={handleInput}>/</Button>
        </div>
        <div className='row'>
          <ButtonClear managementClear={() => setInput("")}>Clear</ButtonClear>
        </div>

      </div>
    </div>
  );
}

export default App;
