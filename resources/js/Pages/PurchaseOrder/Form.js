import React from 'react'
import FormControl from "../../Components/FormControl"
import AddressAutocomplete from "../../Components/AddressAutocomplete"
import { Form as FormikForm, FieldArray } from "formik"
import { usePage } from '@inertiajs/inertia-react'
import { options } from "../../Components/util"

const Form = ({setValues, setErrors, resetForm, values, errors}) => {
  
    const props = usePage().props
    
    const [vendorOption, setVendorOption] = React.useState([])
    const [customerOption, setCustomerOption] = React.useState([])
    const [warehouseOption, setWarehouseOption] = React.useState([])
    const { deliveryToOptions } = options

    React.useEffect(()=> {
        if(props.customers && props.customers.length > 0) {
            const options = props.customers.map(({id, first_name, middle_name, last_name}) => ({value: id, label: `${first_name} ${middle_name} ${last_name}`}))
            setCustomerOption([{value: "", label: "--Select--"}, ...options])
        }

        if(props.vendors && props.vendors.length > 0) {
            const options = props.vendors.map(vendor => ({value: vendor.id, label: vendor.display_name}))
            setVendorOption([{value: "", label: "--Select--"}, ...options])
        }

        if(props.warehouses && props.warehouses.length > 0) {
            const options = props.warehouses.map(warehouse => ({value: warehouse.id, label: warehouse.name}))
            setWarehouseOption([{value: "", label: "--Select--"}, ...options])
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
            <AddressAutocomplete setValues={setValues} />
            <FormControl control="select" name="delivery_to" options={deliveryToOptions} label="Delivery To" />
            {values.delivery_to != "other" && <FormControl control="select" name="receiver" options={values.delivery_to === "warehouse" ? warehouseOption : customerOption} label={values.delivery_to === "warehouse" ? "Warehouse" : "Customer" } />}
            <FormControl control="select" name="vendor" options={vendorOption} label="Vendor" />

            <FieldArray name="items">
                {({push, remove, form})=> (
                    <div class="table-responsive">
                        <table class="table align-items-center">
                            <thead class="thead-light">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Unit Price</th>
                                    <th scope="col">GST</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {form.values.items.map((item, index) => (
                                    <tr key={index}>
                                        <th scope="row">
                                            <FormControl control="input" name={`items.${index}.name`} />
                                        </th>
                                        <td>
                                            <FormControl control="input" name={`items.${index}.quantity`} />
                                        </td>
                                        <td>
                                            <FormControl control="input" name={`items.${index}.unit_price`} />
                                        </td>
                                        <td class="text-right">
                                            <FormControl control="input" name={`items.${index}.gst`} />
                                        </td>
                                        <td class="text-right">
                                            <FormControl control="input" name={`items.${index}.amount`} value={values.items[index].quantity * values.items[index].unit_price} />
                                        </td>
                                        <td style={{verticalAlign: "baseline"}}>
                                            <button
                                                type="button"
                                                className="btn btn-sm"
                                                onClick={()=> remove(index)}
                                                disabled={values.items.length == 1}
                                            > <i className="far fa-2x fa-trash-alt"></i> </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <button type="button" class="btn btn-sm btn-primary" onClick={()=> push({name: "", quantity: "" , unit_price:"", amount: ""})}>Add New Item</button>
                    </div>
                )}
            </FieldArray>
            <div className="row">
                <div className="col text-center">
                    <input className="btn btn-success" type="submit" /> 
                </div>
            </div>
        </FormikForm>
    )
}

export default Form