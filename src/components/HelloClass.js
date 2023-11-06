import React, {Component} from 'react';

class HelloClass extends Component {

    constructor() {
        super();
        this.state={
            name:"Lei Song",
            age:44
        }
    }

    clickMe(){
        alert("clicked in HelloClass.js")
    }

    render() {
        return (
            <div>
                <h1>Hello in Class Component</h1>
                <p>This is my class component</p>
                <h2>My data</h2>
                <p>Name: {this.state.name}</p>
                <p>Age: {this.state.age}</p>
                <h2>Input data</h2>
                <p>Name: {this.props.name}</p>
                <p>Age: {this.props.age}</p>
                <button onClick={this.clickMe}>Click me</button>
                <button onClick={this.props.clickMe}>Click me</button>

            </div>
        );
    }
}

export default HelloClass;