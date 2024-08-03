import React from 'react';

function Image(props) {
  return (
    <img className='img' src={props.url} alt='image' />
  )
}

export default Image;