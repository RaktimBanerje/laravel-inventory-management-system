import React from 'react'
import FormControl from "../../../Components/FormControl"
import { Form as FormikForm } from "formik"
import { usePage } from '@inertiajs/inertia-react'

const Form = ({setErrors, resetForm, errors}) => {
  
    const props = usePage().props
    
    const [itemOption, setItemOption] = React.useState([])

    React.useEffect(()=> {
        if(props.items && props.items.length > 0) {
            const options = props.items.map(item => ({value: item.id, label: `${item.name} - ${item.sku}`}))
            setItemOption([{value: "", label: "--Select--"}, ...options])
        }

        if(Object.keys(props.errors).length > 0) {
            setErrors({...errors, ...props.errors})
        }

        if(props.flash.success){
            resetForm()
        }
    }, [props])

    return (
        <FormikForm>
            <FormControl control="react-select" options={itemOption} name="item_id" label="Item" />

            <FormControl control="input" type="number" name="quantity" label="Quantity" />

            <FormControl control="input" name="batch" label="Batch/ Lot no." />

            <FormControl control="input" type="number" name="cost_price" label="Cost Price" />

            <FormControl control="input" type="date" name="mfg_at" label="MFG Date" />

            <FormControl control="input" type="date" name="exp_at" label="EXP Date" />

            <div className="row">
                <div className="col text-center">
                    <input className="btn btn-success" type="submit" /> 
                </div>
            </div>
        </FormikForm>
    )
}

export default Form