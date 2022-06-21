import './App.css';
import freecodecampLogo from "./images/freecodecamp-logo.png";

function App() {
  return (
    <div className="App">
      <div className="freecodecamp-logo-conteiner">
        <img
          className="freecodecamp-logo"
          src={freecodecampLogo}
          alt="logo freecodecamp"
        />
      </div>
    </div>
  );
}

export default App;
