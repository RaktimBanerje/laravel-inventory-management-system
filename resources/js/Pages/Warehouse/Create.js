import React from 'react'
import { regexp } from "../../Components/util"
import { Inertia } from "@inertiajs/inertia"
import { usePage } from '@inertiajs/inertia-react'
import { toast } from "react-toastify"
import { Formik } from 'formik'
import * as Yup from "yup"
import Form from "./Form"

const Create = ({toastId}) => {

    const { phone } = regexp

    const initialValues = {
        name: "", 
        email: "",
        phone: "",
        tel_phone: "",
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
        name:  Yup
                .string()
                .required("Required"), 
        email:  Yup
                .string()
                .email("Invalid")
                .required("Required"),
        phone:  Yup
                .string()
                .matches(phone, "Invalid")
                .min(10, "too sort")
                .max(12, "too long")
                .required("Required"),
        tel_phone:  Yup
                .string()
                .matches(phone, "Invalid")
                .min(10, "too sort")
                .max(12, "too long")
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

    const handleSubmit = (values) => {
        Inertia.post(route("warehouse.store", values))
        toastId.current = toast("Adding New Warehouse...", { autoClose: false })
    }

    if(Object.keys(usePage().props.errors).length > 0){
        toast.update(toastId.current, {render: "Form Submission Failed", type: toast.TYPE.ERROR, autoClose: 5000})
    }
    if(usePage().props.flash.success){
        toast.update(toastId.current, {render: "New Warehouse Is Added", type: toast.TYPE.SUCCESS, autoClose: 5000})
    }

    return (
        <Formik 
            initialValues={initialValues} 
            validationSchema={validationSchema} 
            onSubmit={handleSubmit}
            component={Form}
        />       
    )
}

export default Create