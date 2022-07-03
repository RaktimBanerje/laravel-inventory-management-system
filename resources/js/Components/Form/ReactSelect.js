import React from "react"
import InputError  from "./InputError"
import { Field, ErrorMessage } from "formik"
import RSelect from "react-select"

const ReactSelect = ({
    label,
    name,
    options,
    ...rest
}) => {
    return (
        <div className="form-group row">
            {label && <label htmlFor={label} className="col-sm-2 col-form-label">{label}</label>}
            <div className="col-sm-10">
                <Field className="form-control">
                    {({form, field})=> {
                        return (
                            <RSelect
                                className="basic-single" 
                                options={options}
                                onChange={(newValue) => form.setFieldValue(name, newValue.value)}
                            />
                        )
                    }}
                </Field>
                <ErrorMessage name={name} component={InputError} />
            </div>
        </div>
    )
}

export default React.memo(ReactSelect)