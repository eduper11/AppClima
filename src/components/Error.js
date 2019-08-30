import React from 'react';

function Error({ message }) {
    return (
        <div className='cad-panel red darken-4 error col s12'>{message}</div>
    );
}

export default Error;
