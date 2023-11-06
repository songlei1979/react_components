import logo from './logo.svg';
import './App.css';
import Helloworld from "./components/Helloworld";
import HelloClass from "./components/HelloClass";

function App() {

    function clickMe(){
        alert("Passed from App.js")
    }

  return (
    <div className="App">
      <Helloworld name={"Lei Song"} age={44} clickMe={clickMe}/>
        <HelloClass name={"Gerard Lovell"} age={60} clickMe={clickMe}/>
    </div>
  );
}

export default App;
