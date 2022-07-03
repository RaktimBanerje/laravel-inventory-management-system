import AppLayout from "../../../Layouts/AppLayout"
import React from "react"
import { usePage } from "@inertiajs/inertia-react" 
import Columns from "./Columns"
import DataGrid from "../../../Components/DataGrid"

const Index = () => {

    const props = usePage().props
    const columns = React.useMemo(()=> Columns, [])
    const data = React.useMemo(()=> props.stocks, [])

    return (
        <AppLayout>
            <DataGrid columns={columns} data={data} />
         </AppLayout>
    )
}

export default Index