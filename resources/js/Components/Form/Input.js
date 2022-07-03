import React from "react"
import InputError  from "./InputError"
import { Field, ErrorMessage } from "formik"

const Input = ({
    label,
    type,
    name,
    ...rest
}) => {
    return (
        <div className="form-group row">
            {label && <label htmlFor={label} className="col-sm-2 col-form-label">{label}</label>}
            <div className="col-sm-10">
                <Field name={name}>
                    {({form, field})=> (
                        <input 
                            className="form-control"
                            type={type ? type : "text"}
                            id={name}
                            {...field}
                            {...rest}
                        />
                    )}
                </Field>
                <ErrorMessage name={name} component={InputError} />
            </div>
        </div>
    )
}

export default React.memo(Input)