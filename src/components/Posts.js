import React, {Component, Fragment} from 'react';

class Posts extends Component {

    constructor() {
        super();
        this.state={
            posts:[]
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response=>response.json())
            .then(data=>this.setState({posts:data}))
    }

    render() {
        return (
<Fragment>
                <h1>Posts Imported</h1>
                {this.state.posts.map(
                    post=>
                        <p key={post.id}>{post.title}</p>
                )}
           </Fragment>
        );
    }
}

export default Posts;