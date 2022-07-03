import React from "react"
import DateView from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import InputError  from "./InputError"
import { Field, ErrorMessage } from "formik"

const DatePicker = ({label, name}) => {
    return (
        <div className="form-group row">
            {label && <label htmlFor={label} className="col-sm-2 col-form-label">{label}</label>}
            <div className="col-sm-10">
                <Field name={name}>
                    {({form, field})=> {
                        return( 
                            <DateView 
                                id={name}
                                {...field}
                                className="form-control"
                                dateFormat="dd/MM/yyyy"
                                selected={field.value}
                                onChange={(value)=> form.setFieldValue(name, value)}
                            />
                        )
                    }}
                </Field>
                <ErrorMessage name={name} component={InputError} />
            </div>
        </div>
    )
}

export default DatePicker