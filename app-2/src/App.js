import "./App.css";
import freecodecampLogo from "./images/freecodecamp-logo.png";
import Button from "./components/Boton";
import Meter from "./components/Meter";
import { useState } from "react";

function App() {
  const [numClicks, setNumClicks] = useState(0)

  const callbackClick = () => {
    setNumClicks(numClicks +1);
  };
  const resetMeter = () => {
   setNumClicks(0);
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
      <div className="principal-conteiner">
        <Meter numClicks={numClicks} />
        <Button
        text="click"
        isClickButton={true}
        callbackClick={callbackClick}
        />
        <Button
        text="reset"
        isClickButton={false}
        callbackClick={resetMeter}
        />
      </div>
      
    </div>
  );
}

export default App;
