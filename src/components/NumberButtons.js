import React from 'react'

function NumberButtons(prop) {

  

  return (
        <button className='number-button' onClick={prop.onButNumClick}>{prop.num}</button>
  )
}

export default NumberButtons