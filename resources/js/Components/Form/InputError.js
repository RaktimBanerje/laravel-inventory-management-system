import React from "react"

const InputError = ({children}) => {
    return (
        <div className="invalid-feedback d-block">{children}</div>
    )
}

export default InputError