import React from "react"
import InputError  from "./InputError"
import { Field, ErrorMessage } from "formik"

const Select = ({
    label,
    name,
    options,
    ...rest
}) => {
    return (
        <div className="form-group row">
            {label && <label htmlFor={label} className="col-sm-2 col-form-label">{label}</label>}
            <div className="col-sm-10">
                <Field as="select" className="form-control" id={name} name={name} {...rest}>
                    {
                        options.map((option, index) => <option key={index} value={option.value}>{option.label}</option>)
                    }
                </Field>
                <ErrorMessage name={name} component={InputError} />
            </div>
        </div>
    )
}

export default React.memo(Select)