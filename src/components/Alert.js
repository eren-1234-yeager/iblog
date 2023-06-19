import React from 'react'

function Alert(props) {
    return (
        <>
            <div class={`alert alert-${props.type} mb-0`} role="alert">
                {props.message}
            </div>
        </>
    )
}

export default Alert