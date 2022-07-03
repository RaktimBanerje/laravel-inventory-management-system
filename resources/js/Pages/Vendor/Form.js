import React from 'react'
import { Form as FormikForm } from "formik"
import { usePage } from '@inertiajs/inertia-react'
import { options } from "../../Components/util"
import AddressAutocomplete from '../../Components/AddressAutocomplete'
import FormControl from '../../Components/FormControl'

const Form = ({
    setValues,
    setErrors,
    resetForm,
    errors,
}) => {

    const { gstTreatmentOptions, priceListOptions, currencyOptions } = options

    const commonFields = [
        { control: "input", name: "company_name", label: "Company Name" },
        { control: "input", name: "display_name", label: "Vendor Display Name" },
        { control: "input", name: "email", label: "Email" },
        { control: "input", name: "phone_0", label: "Phone" },
        { control: "input", name: "phone_1", label: "Tele No." },
    ]

    const tabs = [
        {
            name: "Other",
            fields: [
                { control: "select", name: "gst_treatment", options: gstTreatmentOptions, label: "GST Treatment" },
                { control: "select", name: "currency", options: currencyOptions, label: "Currency" },
                { control: "select", name: "price_list", options: priceListOptions, label: "Price List" },
            ]
        },
        {
            name: "Address",
            fields: [
                { control: "input", name: "building_no", label: "Flat/ Apartment No.", placeholder: ""},
                { control: "input", name: "street", label: "Address", placeholder: ""},
                { control: "input", name: "country", label: "Country" },
                { control: "input", name: "state", label: "State" },
                { control: "input", name: "locality", label: "City" },
                { control: "input", name: "area", label: "Area" },
                { control: "input", name: "zip", label: "ZIP Code" },
                { control: "input", name: "land_mark", label: "land_mark" },
                { control: "input", name: "latitude", label: "Latitude" },
                { control: "input", name: "longitude", label: "Longitude" },
            ]
        }
    ]

    const props = usePage().props

    React.useEffect(()=> {
        if(Object.keys(props.errors).length > 0) {
            setErrors({...errors, ...props.errors})
        }

        if(props.flash.success){
            resetForm()
        }
    }, [props])
    
    return (
        <FormikForm>
            <AddressAutocomplete setValues={setValues} />
            
            {commonFields.map((field, index) => <FormControl key={index} {...field} />)}
            
            <ul className="nav nav-pills">
                {tabs.map(({name}, index) => (
                    <li key={index} className="nav-item">
                        <a data-toggle="pill" className={index == 0 ? "nav-link active" : "nav-link"} href={`#tab-${index}`}>{name}</a>
                    </li>
                ))}
            </ul>

            <div className="tab-content my-2">
                {tabs.map(({fields}, index) => (
                    <div id={`tab-${index}`} className={ index == 0 ? "container tab-pane active" : "container tab-pane fade"} key={index}>
                        {fields.map((field,index) => <FormControl key={index} {...field} />)}
                    </div>
                ))}
            </div>

            <div className="row justify-content-center">
                <input type="submit" id="submit" name="submit" className="btn btn-success" />
            </div>
        </FormikForm>
    )
}

export default Form