import React from 'react'

function ResultField(prop) {

    return (
            <div>
        <input type='number' value={prop.result} placeholder='0' readOnly></input>
            </div>
    )
}

export default ResultField