import logo from './logo.svg';
import './App.css';
import Helloworld from "./components/Helloworld";
import HelloClass from "./components/HelloClass";
import Loop from "./components/Loop";
import Condition from "./components/Condition";
import Form from "./components/Form";
import Posts from "./components/Posts";
import {Link, Route, Routes} from "react-router-dom";
import Nav from "./components/Nav";

function App() {

    function clickMe() {
        alert("Passed from App.js")
    }

    return (
        <div className="App">
            {/*<Helloworld name={"Lei Song"} age={44} clickMe={clickMe}/>*/}
            {/*  <HelloClass name={"Gerard Lovell"} age={60} clickMe={clickMe}/>*/}
            {/*  <Loop names={["Lei", "Gerard", "Chris"]}/>*/}
            {/*  <Condition/>*/}
            {/*  <Form/>*/}
            {/*  <Posts/>*/}
            <Nav/>

            <Routes>
                <Route path={"/"} element={<Form/>}/>
                <Route path={"/names/"} element={<Loop names={["Lei", "Gerard", "Chris"]}/>}/>
                <Route path={"/posts/"} element={<Posts/>}/>
            </Routes>
        </div>
    );
}

export default App;
