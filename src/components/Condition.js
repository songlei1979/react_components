import React, {Component} from 'react';

class Condition extends Component {

    constructor() {
        super();
        this.state = {
            name: "Lei Song"
        }
    }

    swapname = ()=>{
        this.setState({
            name:this.state.name==="Lei Song"?"Gerard Lovell":"Lei Song"
        })
    }

    render() {
        return (
            <div>
                <h1>Condition</h1>
                <p>Name: {this.state.name}</p>
                <button onClick={this.swapname}>Change</button>
            </div>
        );
    }
}

export default Condition;