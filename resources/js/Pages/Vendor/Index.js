import React from "react"
import AppLayout from "../../Layouts/AppLayout"
import { Link, usePage } from "@inertiajs/inertia-react"
import Columns from "./Columns"
import DataGrid from "../../Components/DataGrid"

const Index = () => {

    const props = usePage().props
    const columns = React.useMemo(()=> Columns, [])
    const data = React.useMemo(()=> props.vendors, [])

    return (
        <AppLayout>
            <Link class="btn btn-primary my-4" href={route("vendor.create")}>New Vendor</Link>
            
            <DataGrid name="Vendos" data={data} columns={columns} />
        </AppLayout>
    )
}

export default Index