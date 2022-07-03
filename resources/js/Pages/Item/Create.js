import React from "react";
import { Inertia } from '@inertiajs/inertia';
import { ToastContainer, toast } from "react-toastify";
import AppLayout from "../../Layouts/AppLayout";
import { usePage } from "@inertiajs/inertia-react";
import Single from "./Single";
import Group from "./Group"

const Create = () => {
    
    const [productType, changeProductType] = React.useState("group")

    const handleSubmit = (values, action) => {
        values.type = productType
        
        if(productType === "group") {
            for(let i = 0 ; i < values.variations.length ; i++) {
                for (let j = 0 ; j < values.variations[i].attribute.length ; j++) {
                    values.variations[i].attribute[j].name = values.attributes[j].name.trim()
                }
            }
        }

        Inertia.post(route("item.store", values));

        toastId.current = toast("Adding Items...", { autoClose: false })
    }

    const toastId = React.useRef(null)

    const props = usePage().props

    React.useEffect(()=> {
        if(Object.keys(props.errors).length > 0){
            toast.update(toastId.current, {render: "Form Submission Failed", type: toast.TYPE.ERROR, autoClose: 5000})
        }
        if(props.flash.success){
            toast.update(toastId.current, {render: "New Item Is Added", type: toast.TYPE.SUCCESS, autoClose: 5000})
        }
    }, [props])
    
    return (
        <AppLayout>
            <div className="form-group row">
                <label htmlFor="item-type" className="col-sm-2 col-form-label">Item type</label>
                <div className="col-sm-4">
                    <select className="form-control" name="type" value={productType} onChange={event => changeProductType(event.target.value)}>
                        <option value="single">Single</option>
                        <option value="group">Group</option>
                    </select>
                </div>
            </div>
            
            {productType === "single" ? <Single handleSubmit={handleSubmit} /> : <Group handleSubmit={handleSubmit} /> }

            <ToastContainer />
        </AppLayout>
    )
};

export default Create;
