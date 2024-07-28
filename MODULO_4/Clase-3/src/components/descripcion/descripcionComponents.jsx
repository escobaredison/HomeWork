import React from 'react'

export const Descripcion = (props) => {
    console.log(props,'descripcion')
    return (
        <div className='descripcion'>
            {props.descripcion}
        </div>
    )
}