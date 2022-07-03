import React from "react"
import AppLayout from "../../Layouts/AppLayout"
import { Inertia } from '@inertiajs/inertia'
import { usePage } from "@inertiajs/inertia-react"
import { Formik, Form } from "formik"
import FormControl from "../../Components/FormControl"
import { regexp, options } from "../../Components/util"
import * as Yup from "yup"
import { ToastContainer, toast } from "react-toastify"
const AddressAutocomplete = React.lazy(()=> import( "../../Components/AddressAutocomplete"))

const Create = () => {

    const { phone } = regexp
    const { salutaionOptions, sexOptions, gstTreatmentOptions, priceListOptions, currencyOptions } = options

    const initialValues = {
        "salutaion": "" ,
        "first_name": "" ,
        "middle_name": "" ,
        "last_name": "" ,
        "sex": "" ,
        "company_name": "" ,
        "customer_display_name": "" ,
        "email": "" ,
        "phone_0": "" ,
        "phone_1": "" ,
        "skype": "" ,
        "facebook": "" ,
        "twitter": "" ,
        "website": "" ,
        "gst_treatment": "" ,
        "gstin": "" ,
        "pan": "" ,
        "aadhar": "" ,
        "currency": "" ,
        "price_list": "" ,
        "building_no": "",
        "street": "" ,
        "country": "" ,
        "state": "" ,
        "locality": "" ,
        "zip": "", 
        "area": "",
        "land_mark": "",
        "latitude": "",
        "longitude": ""
    }

    const validationSchema = Yup.object().shape({
        "salutaion": Yup.string().required("Required") ,
        "first_name": Yup.string().required("Required") ,
        "middle_name": Yup.string().required("Required") ,
        "last_name": Yup.string().required("Required") ,
        "sex": Yup.string().required("Required") ,
        "company_name": Yup.string().required("Required") ,
        "customer_display_name": Yup.string().required("Required") ,
        "email": Yup.string().email("Invalid email").required("Required") ,
        "phone_0": Yup.string()
                    .matches(phone, "Invalid")
                    .min(10, "too sort")
                    .max(12, "too long")
                    .required("Required"),
        "phone_1": Yup.string()
                    .matches(phone, "Invalid")
                    .min(10, "too sort")
                    .max(12, "too long")
                    .required("Required"),
        "gst_treatment": Yup.string().required("Required") ,
        "gstin": Yup.string().required("Required") ,
        "pan": Yup.string().required("Required") ,
        "aadhar": Yup.string().required("Required") ,
        "currency": Yup.string().required("Required") ,
        "building_no": Yup.string().required("Required"),
        "street": Yup.string().required("Required") ,
        "country": Yup.string().required("Required") ,
        "state": Yup.string().required("Required") ,
        "locality": Yup.string().required("Required") ,
        "zip": Yup.string().required("Required"), 
        "area": Yup.string().required("Required"),
        "land_mark": Yup.string(),
    })

    
    const toastId = React.useRef(null)

    const onSubmit = async (values) => {
        Inertia.post(route("customer.store", values));
        toastId.current = toast("Adding New Customer...", { autoClose: false })
    }

    const props = usePage().props

    React.useEffect(()=> {
        if(Object.keys(props.errors).length > 0){
            toast.update(toastId.current, {render: "Form Submission Failed", type: toast.TYPE.ERROR, autoClose: 5000})
        }
        if(props.flash.success){
            toast.update(toastId.current, {render: "New Customer Is Added", type: toast.TYPE.SUCCESS, autoClose: 5000})
        }
    }, [props])

    return (
        <AppLayout>
            <Formik
                enableReinitialize={true}
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({setValues, setErrors, errors, isValid, isSubmitting}) => {

                    (Object.keys(usePage().props.errors).length > 0 && Object.keys(errors).length == 0) && setErrors({...errors, ...usePage().props.errors})

                    return(
                        <Form>
                            <React.Suspense fallback={" "}>
                                <AddressAutocomplete setValues={setValues} /> 
                            </React.Suspense>
                            <div className="row">
                                <div className="col">
                                    <FormControl control="select" options={salutaionOptions} name="salutaion" label="Salutaion" />
                                </div>
                            </div>
                            <div className="row">
                                <label htmlFor="name" className="col-md-2 col-form-label">Name</label>
                                <div className="col-md-3">
                                    <FormControl control="input" name="first_name" placeholder="First Name" />
                                </div>
                                <div className="col-md-3">
                                    <FormControl control="input" name="middle_name" placeholder="Middle Name" />
                                </div>
                                <div className="col-md-3">
                                    <FormControl control="input" name="last_name" placeholder="Last Name" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <FormControl control="select" options={sexOptions} name="sex" label="Sex" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <FormControl control="input" name="company_name" label="Company Name" />
                                </div>
                            </div>
                            <div>
                                <FormControl control="input" name="customer_display_name" label="Customer Display Name" />
                            </div>
                            <div className="row">
                                <div className="col">
                                    <FormControl control="input" name="email" label="Email" />
                                </div>
                            </div>
                            <div className="row">
                                <label htmlFor="name" className="col-md-2 col-form-label">Phone</label>
                                <div className="col-md-5">
                                    <FormControl control="input" name="phone_0" placeholder="Work Phone" />
                                </div>
                                <div className="col-md-5">
                                    <FormControl control="input" name="phone_1" placeholder="Mobile" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <FormControl control="input" name="skype" label="Skype"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <FormControl control="select" options={gstTreatmentOptions} name="gst_treatment" label="GST Treatment" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <FormControl control="select" options={currencyOptions} name="currency" label="Currency" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <FormControl control="select" options={priceListOptions} name="price_list" label="Price List" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <FormControl control="input" name="gstin" label="GSTIN" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <FormControl control="input" name="aadhar" label="AADHAR" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <FormControl control="input" name="pan" label="PAN" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <FormControl control="input" name="building_no" label="Flat, Apartment" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <FormControl control="input" name="street" label="Address" placeholder=""/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <FormControl control="input" name="country" label="Country"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <FormControl control="input" name="state" label="State" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <FormControl control="input" name="locality" label="City" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <FormControl control="input" name="area" label="Area" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <FormControl control="input" name="zip" label="Zip Code" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <FormControl control="input" name="land_mark" label="Land Mark"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <FormControl control="input" name="website" label="Website" />
                                </div>
                            </div>
                
                            <div className="row">
                                <div className="col">
                                    <FormControl control="input" name="facebook" label="Facebook"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <FormControl control="input" name="twitter" label="Twitter" />
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <input type="submit" id="submit" name="submit" className="btn btn-success" disabled={!isValid || isSubmitting} />
                            </div>
                        </Form>
                    )
                }}
            </Formik>
            <ToastContainer />
        </AppLayout>
    )
}

export default Create