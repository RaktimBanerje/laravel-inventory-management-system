import AppLayout from "../../Layouts/AppLayout"
import React from "react"
import { Link, usePage } from "@inertiajs/inertia-react"
import Columns from "./Columns"
import DataGrid from "../../Components/DataGrid"
import { ToastContainer } from "react-toastify"
import Modal from "../../Components/Modal"
import Create from "./Stock/Create"

const Index = () => {

    const props = usePage().props
    const columns = React.useMemo(()=> Columns, [])
    const data = React.useMemo(()=> props.items, [])
    const toastId = React.useRef(null)
    
    return (
        <AppLayout>
            <Link class="btn btn-primary my-4" href={route("item.create")}>New Item</Link>
            <button class="btn btn-primary my-4" data-toggle="modal" data-target="#new-stock">New Stock</button>

            <DataGrid data={data} columns={columns} />

            <Modal id="new-stock">
                <h4>New Stock </h4>
                <Create toastId={toastId} />
            </Modal>
            <ToastContainer />
         </AppLayout>
    )
}

export default Index