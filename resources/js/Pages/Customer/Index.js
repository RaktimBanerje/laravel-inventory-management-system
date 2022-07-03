import React from "react"
import AppLayout from "../../Layouts/AppLayout"
import { Link, usePage } from "@inertiajs/inertia-react"
import Columns from "./Columns"
import DataGrid from "../../Components/DataGrid"

const Index = () => {
    const props = usePage().props

    const data = React.useMemo(()=> props.customers, [])
    const columns = React.useMemo(()=> Columns, [])

    return (
        <AppLayout>
            <Link class="btn btn-primary my-4" href={route("customer.create")}>New Customer</Link>
            
            <DataGrid name="Customer" data={data} columns={columns} />
        </AppLayout>
    )
}

export default Index