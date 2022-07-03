import React from "react"
import AppLayout from "../../Layouts/AppLayout"
import { Link, usePage } from "@inertiajs/inertia-react"
import { renderCell } from "../../Components/util"
import { formatDate } from '../../Components/util'
import DataGrid from "../../Components/DataGrid"
import Modal from "../../Components/Modal"
import { numberFormatter, print, NumberRangeColumnFilter, DateRangeColumnFilter, SelectColumnFilter } from "../../Components/util"

const Index = () => {

    const [purchase_order, setPurchaseOrder] = React.useState(undefined)

    const props = usePage().props

    const viewOrderDetails = (id) => {
        axios.get(route("sale-order.show", id))
            .then(({data}) => setPurchaseOrder(data))
            .catch(error=> console.log(error))
    }

    const { addressCell } = renderCell    

    const columns = React.useMemo(()=> [
        {
            Header: "#",
            accessor: "order_id"
        },
        {
            Header: "Price (INR)",
            accessor: "order_price",
            Cell: ({value}) => numberFormatter.format(value),
            Filter: NumberRangeColumnFilter,
            filter: "between"
        },
        {
            Header: "Receiver",
            accessor: originalRow => originalRow.warehouse_id ? "Warehouse" : "Customer",
        },
        {
            Header: "Receiver Name",
            accessor: originalRow => originalRow.warehouse_name ? originalRow.warehouse_name : `${originalRow.customer_salutaion} ${originalRow.customer_first_name} ${originalRow.customer_middle_name} ${originalRow.customer_last_name}`,
        },
        {
            Header: "Vendor",
            accessor: "vendor_name"
        },
        {
            Header: "Order Date",
            id: "created_at",
            accessor: originalRow => originalRow.created_at ? formatDate(originalRow.created_at) : "",
            Filter: DateRangeColumnFilter,
            filter: "dateBetween",
        },
        {
            Header: " ",
            Header: " ",
            Cell: ({row}) => <button 
                                data-toggle="modal" 
                                data-target="#purchase_order_invoice"
                                className="btn btn-sm btn-success" 
                                onClick={()=> viewOrderDetails(row.original.id)}>View Details</button>
        },
    ], [])
    
    const data = React.useMemo(()=> props.purchase_orders, [])
    
    return (
        <AppLayout>
            <Link class="btn btn-primary my-4" href={route("purchase-order.create")}>New Purchase Order</Link>
            
            <DataGrid name="Purchase Order" data={data} columns={columns} />

            <Modal id="purchase_order_invoice">
                <h4>Purchase Order</h4>
                {purchase_order ? <Invoice {...purchase_order} /> : "Loading..."}
                <div className="text-center">
                    <button className="btn btn-lg btn-success" onClick={()=> print()}>Download</button>
                </div> 
            </Modal>
        </AppLayout>
    )
}

export default Index