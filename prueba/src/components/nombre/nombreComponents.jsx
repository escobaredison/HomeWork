import React from 'react'

export const Nombre = (props) => {
    console.log(props,'nombre');
    return (
        <div className='nombre'>
            {props.name}
        </div>
    )
}