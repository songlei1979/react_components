import React, {Component} from 'react';

class Form extends Component {

    constructor() {
        super();
        this.state={
            username:"",
            password:""
        }
    }

    username_handler = (event) => {
        this.setState({username:event.target.value})
    }

    password_handler = (event) => {
        this.setState({password:event.target.value})
    }
    render() {
        return (
            <div>
                <p>Username: <input onChange={this.username_handler} type={"text"}/></p>
                <p>Password: <input onChange={this.password_handler} type={"password"}/></p>
                <button>Login</button>
                <p>Username: {this.state.username}</p>
                <p>Password: {this.state.password}</p>
            </div>
        );
    }
}

export default Form;