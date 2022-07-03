import React from 'react'
import AppLayout from "../../Layouts/AppLayout"
import { Formik } from 'formik'
import { Inertia } from '@inertiajs/inertia'  
import { usePage } from '@inertiajs/inertia-react'
import { ToastContainer, toast} from 'react-toastify'
import Form from './Form'

const Create = () => {

    const initialValues = {
        customer: "",
        items: [{
            name: "" ,
            quantity: "",
            unit_price: "",
            amount: "",
            gst: ""           
        }],
    }  
    
    const toastId = React.useRef(null)

    const handleSubmit = values => {
        Inertia.post(route("sale-order.store", values))

        toastId.current = toast("Creating New Sale Order", {autoClose: false})
    }

    if(Object.keys(usePage().props.errors).length > 0) {
        toast.update(toastId.current, {render: "Form Submission Failed", type: toast.TYPE.ERROR, autoClose: 5000})
    }

    if(usePage().props.flash.success){
        toast.update(toastId.current, {render: "New Sale Order Created", type: toast.TYPE.SUCCESS, autoClose: 5000})
    }

    return (
        <AppLayout>
            <Formik 
                initialValues={initialValues}
                onSubmit={handleSubmit}
                component={Form}
            />
            <ToastContainer />
        </AppLayout>
    )
}

export default Create