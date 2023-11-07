import React from 'react';
import {Link} from "react-router-dom";

function Nav(props) {
    return (
        <div>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/names/"}>Loop</Link></li>
                <li><Link to={"/posts/"}>Posts</Link></li>
            </ul>
        </div>
    );
}

export default Nav;