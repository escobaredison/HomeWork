import React from 'react'

export const Nombre = (props) => {
    console.log(props,'nombre');
    return (
        <div className='box-nombre'>
            <div className='nombre'>{props.name}</div>
        </div>
    )
}