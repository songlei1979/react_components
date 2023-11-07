import React from 'react';

function Loop(props) {
    return (
        <div>
            <h1>Loop</h1>
            {props.names.map(
                name=>
                    <p key={name}>{name}</p>
            )}
        </div>
    );
}

export default Loop;