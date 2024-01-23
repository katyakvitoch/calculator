import React from 'react'

function operatorsButtons(prop) {
    return (
        <div>
            <button onClick={prop.onOperatorClick}>{prop.operator}</button>
        </div>
    )
}

export default operatorsButtons