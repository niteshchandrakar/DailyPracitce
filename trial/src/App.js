import logo from "./logo.svg";
import "./App.css";
import { Allroutes } from "./components/Allroutes";
import { Navbar } from "./components/Navbar";
import { ContextApi } from "./ContextApi/ContextApi";

function App() {



  return (
    <div className="App">
      <Navbar/>
      <Allroutes/>
    </div>
  );
}

export default App;
