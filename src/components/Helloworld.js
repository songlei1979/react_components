import React from 'react';

function Helloworld(props) {

    function clickMe(){
        alert("clicked in Helloworld.js")
    }

    return (
        <div>
            <h1>Hello World</h1>
            <p>This is come form my first function component</p>
            <p>This is my properties:</p>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <button onClick={clickMe}>Click me</button>
            <button onClick={props.clickMe}>Click me</button>

        </div>
    );
}

export default Helloworld;