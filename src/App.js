import logo from "./logo.svg";
import "./App.css";
import { Main } from "./components/Main";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Main />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
