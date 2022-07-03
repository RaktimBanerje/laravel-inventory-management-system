import AppLayout from "../../Layouts/AppLayout"
import React from "react"
import { ToastContainer } from "react-toastify"
import Create from "./Create"
import Modal from "../../Components/Modal"
import { usePage } from "@inertiajs/inertia-react"
import Columns from "./Columns"
import DataGrid from "../../Components/DataGrid"


const Index = () => {

    const toastId = React.useRef(null)
    const props = usePage().props
    const columns = React.useMemo(()=> Columns, [])
    const data = React.useMemo(()=> props.warehouses, [])

    return (
        <AppLayout>
            <button 
                class="btn btn-primary my-4" 
                data-toggle="modal" 
                data-target="#new-warehouse"
            >New Warehouse</button>

            <DataGrid name="Warehouses" data={data} columns={columns} />

            <Modal id="new-warehouse">
                <h4>New Warehouse </h4>
                <Create toastId={toastId} />
            </Modal>
            <ToastContainer />
        </AppLayout>
    )
}

export default Index