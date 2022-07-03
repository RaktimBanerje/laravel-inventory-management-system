import React from 'react'
import FormControl from "../../Components/FormControl"
import { Form as FormikForm } from "formik"
import AddressAutocomplete from "../../Components/AddressAutocomplete"
import { usePage } from "@inertiajs/inertia-react"

const Form = ({
    setValues,
    setErrors,
    resetForm,
    errors,
}) => {
    const props = usePage().props

    React.useEffect(()=>{
        
        if(Object.keys(props.errors).length > 0) {
            const formErrors = props.errors
            setErrors({...errors, ...formErrors})
        }

        if(props.flash.success){
            resetForm()
        }
    }, [props])

    return (
        <FormikForm>
            <AddressAutocomplete setValues={setValues} />  
            <FormControl control="input" name="name" label="Name" />
            <FormControl control="input" name="email" label="Email" />
            <FormControl control="input" name="phone" label="Phone" />
            <FormControl control="input" name="tel_phone" label="Tel No." />
            <FormControl control="input" name="website" label="Website" />
            <FormControl control="input" name="building_no" label="Flat, Apartment" />
            <FormControl control="input" name="street" label="Street" placeholder="" />
            <FormControl control="input" name="country" label="Country" />
            <FormControl control="input" name="state" label="State" />
            <FormControl control="input" name="locality" label="City" />
            <FormControl control="input" name="area" label="Area" />
            <FormControl control="input" name="land_mark" label="Land mark" />
            <FormControl control="input" name="zip" label="ZIP Code" />
            <div className="d-none">
                <FormControl control="input" name="latitude" label="Latitude"  />
                <FormControl control="input" name="longitude" label="Longitude"  />
            </div>

            <div className="row">
                <div className="col text-center">
                    <input className="btn btn-success" type="submit" /> 
                </div>
            </div>
        </FormikForm>
  )
}

export default Form