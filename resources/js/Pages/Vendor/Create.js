import AppLayout from "../../Layouts/AppLayout"
import React from 'react'
import { Inertia } from '@inertiajs/inertia'
import { usePage } from "@inertiajs/inertia-react"
import { Formik } from 'formik'
import { ToastContainer, toast } from "react-toastify"
import { regexp } from "../../Components/util"
import * as Yup from "yup"
import Form from './Form'

const Create = () => {
    
    const { phone } = regexp

    const initialValues = {
        company_name: "",
        display_name: "",
        email: "",
        phone_0: "",
        phone_1: "",
        gst_treatment: "",
        price_list: "",
        currency: "",
        building_no: "",
        street: "" ,
        country: "" ,
        state: "" ,
        locality: "" ,
        zip: "", 
        area: "",
        land_mark: "",
        latitude: "",
        longitude: ""
    } 

    const validationSchema = Yup.object().shape({
        company_name: Yup
            .string()
            .required("Required"),
        display_name: Yup
            .string()
            .required("Required"),
        email: Yup
            .string()
            .required("Required"),
        phone_0: Yup
            .string()
            .matches(phone, "Invalid")
            .min(10, "too sort")
            .max(12, "too long")
            .required("Required"),
        phone_1: Yup
            .string()
            .matches(phone, "Invalid")
            .min(10, "too sort")
            .max(12, "too long"),
        gst_treatment: Yup
            .string()
            .required("Required"),
        price_list: Yup
            .string()
            .required("Required"),
        currency: Yup
            .string()
            .required("Required"),
        building_no : Yup
            .string()
            .required("Required"),
        street: Yup
            .string()
            .required("Required") ,
        country: Yup
            .string()
            .required("Required") ,
        state: Yup
            .string()
            .required("Required") ,
        locality: Yup
            .string()
            .required("Required") ,
        zip: Yup
            .string()
            .required("Required"), 
        area: Yup
            .string()
            .required("Required"),
        land_mark: Yup.string(),
        latitude: Yup.string(),
        longitude: Yup.string()
    })

    const handleSubmit = (values, action) => {
        Inertia.post(route("vendor.store"), values)
        toastId.current = toast("Adding New Vendor...", { autoClose: false })
    } 

    const toastId = React.useRef(null)

    const props = usePage().props

    React.useEffect(()=> {
        if(Object.keys(props.errors).length > 0) {
            toast.update(toastId.current, {render: "Form Submission Failed", type: toast.TYPE.ERROR, autoClose: 5000})
        }
        if(props.flash.success) {
            toast.update(toastId.current, {render: "New Vendor Is Added",  type: toast.TYPE.SUCCESS, autoClose: 5000})
        }
    }, [props])

  return (
    <AppLayout>
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            component={Form}
        />
        <ToastContainer />
    </AppLayout>
  )
}

export default Create