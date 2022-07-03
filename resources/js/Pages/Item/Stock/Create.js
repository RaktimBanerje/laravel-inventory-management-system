import React from 'react'
import { Formik } from 'formik'
import { Inertia } from '@inertiajs/inertia'  
import { usePage } from '@inertiajs/inertia-react'
import { toast} from 'react-toastify'
import Form from './Form'

const Create = ({toastId}) => {

    const initialValues = {
        "item_id": "",
        "quantity": "",
        "batch": "",
        "cost_price": "",
        "mfg_at": "",
        "exp_at": ""    
    }  
    
    const handleSubmit = values => {
        Inertia.post(route("stock.store", values))

        toastId.current = toast("Adding New Stock", {autoClose: false})
    }

    if(Object.keys(usePage().props.errors).length > 0) {
        toast.update(toastId.current, {render: "Form Submission Failed", type: toast.TYPE.ERROR, autoClose: 5000})
    }

    if(usePage().props.flash.success){
        toast.update(toastId.current, {render: "New Stock Is Added", type: toast.TYPE.SUCCESS, autoClose: 5000})
    }

    return (
        <>
            <Formik 
                initialValues={initialValues}
                onSubmit={handleSubmit}
                component={Form}
            />
        </>
    )
}

export default Create