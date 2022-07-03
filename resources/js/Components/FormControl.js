import React from "react"
import Input from "./Form/Input"
import Select from "./Form/Select"
import CheckBox from "./Form/CheckBox"
import Radio from "./Form/Radio"
import DatePicker from "./Form/DatePicker"
import ReactSelect from "./Form/ReactSelect"

const FormControl = ({control, ...rest}) => {
    switch(control) {
        case "input" : {
            return <Input {...rest} />
        }
        case "select" : {
            return <Select {...rest} />
        }
        case "checkbox" : {
            return <CheckBox {...rest} />
        }
        case "radio" : {
            return <Radio {...rest} />
        }
        case "datepicker" : {
            return <DatePicker {...rest} />
        }
        case "react-select" : {
            return <ReactSelect {...rest} />
        }
        default : {
            return null
        }
    }
}

export default FormControl