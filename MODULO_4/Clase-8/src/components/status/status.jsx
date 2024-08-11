import React from 'react';
import './status.css'

function Status(props) {
    return (
        <div className='centrar'>
            <h1 className='status'>
                {props.status}
            </h1>
        </div>   
    );
}
export default Status;