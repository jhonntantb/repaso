import './App.css';
import freecodecampLogo from "./images/freecodecamp-logo.png";

function App() {
  return (
    <div className="App">
      <div className="freecodecamp-logo-conteiner"></div>
      <img
        className="freecodecamp-logo"
        src={freecodecampLogo}
        alt="logo freecodecamp"
      />
    </div>
  );
}

export default App;
