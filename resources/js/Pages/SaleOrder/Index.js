import React from "react"
import AppLayout from "../../Layouts/AppLayout"
import { Link, usePage } from "@inertiajs/inertia-react"
import { formatDate } from '../../Components/util'
import DataGrid from "../../Components/DataGrid"
import axios from "axios"
import Invoice from "../../Components/Invoice"
import { numberFormatter, print, NumberRangeColumnFilter, DateRangeColumnFilter, SelectColumnFilter } from "../../Components/util"
import Modal from "../../Components/Modal"

const Index = () => {

    const [sale_order, setSaleOrder] = React.useState(undefined)

    const props = usePage().props

    const viewOrderDetails = (id) => {
        axios.get(route("sale-order.show", id))
            .then(({data}) => setSaleOrder(data))
            .catch(error=> console.log(error))
    }

    const columns = React.useMemo(()=> [
        {
            Header: "#",
            accessor: "id"
        },
        {
            Header: "Customer",
            id: "name",
            accessor: originalRow => `${originalRow.salutaion} ${originalRow.first_name} ${originalRow.middle_name} ${originalRow.last_name}`,
            Filter: SelectColumnFilter,
            filter: "includes"
            
        },
        {
            Header: "Tracking ID",
            accessor: "tracking_id"
        },
        {
            Header: "Tracking Link",
            accessor: "tracking_link"
        },
        {
            Header: "Status",
            accessor: "status",
            Filter: SelectColumnFilter,
            filter: 'includes',
        },
        {
            Header: "Email Address",
            accessor: "email"
        },
        {
            Header: "Mobile",
            accessor: "phone_0"
        },
        {
            Header: "Tele Phone",
            accessor: "phone_1"
        },
        {
            Header: "Price (INR)",
            accessor: "price",
            Cell: ({value}) => numberFormatter.format(value),
            Filter: NumberRangeColumnFilter,
            filter: "between"
        },
        {
            Header: "Delivery Date",
            id: "delivery_at",
            accessor: originalRow => originalRow.delivery_at ? formatDate(originalRow.delivery_at) : "",
            Filter: DateRangeColumnFilter,
            filter: "dateBetween",
        },
        {
            Header: "Order Date",
            id: "created_at",
            accessor: originalRow => originalRow.created_at ? formatDate(originalRow.created_at) : "",
            Filter: DateRangeColumnFilter,
            filter: 'dateBetween',   
        },
        {
            Header: " ",
            Cell: ({row}) => <button 
                                data-toggle="modal" 
                                data-target="#sale_order_invoice"
                                className="btn btn-sm btn-success" 
                                onClick={()=> viewOrderDetails(row.original.id)}>View Details</button>
        },
    ], [])
    
    const data = React.useMemo(()=> props.sale_orders, [])

    return (
        <AppLayout>
            <Link class="btn btn-primary my-4" href={route("sale-order.create")}>New Sale Order</Link>

            <DataGrid name="Sale Order" data={data} columns={columns} />

            <Modal id="sale_order_invoice">
                <h4>Sale Order</h4>
                {sale_order ? <Invoice {...sale_order} /> : "Loading..."}
                <div className="text-center">
                    <button className="btn btn-lg btn-success" onClick={()=> print()}>Download</button>
                </div> 
            </Modal>
            
        </AppLayout>
    )
}

export default Index