import React from 'react'
import { Link } from "@inertiajs/inertia-react"  
import { formatDate } from '../../Components/util'


const Columns = [
    {
        Header: "#",
        accessor: "id"
    },
    {
        Header: "Name",
        accessor: "name"
    },
    {
        Header: "Varitions",
        accessor: "variations",
        Cell: ({value}) => value.map((varition, index) => <p key={index}>
            <span>{varition.attribute} - {varition.value}</span>
        </p>)
    },
    {
        Header: "Description",
        accessor: "description"
    },
    {
        Header: "Cost rice",
        accessor: "cost_price"
    },
    {
        Header: "Dimensions",
        accessor: "dimensions"
    },
    {
        Header: "Weight",
        accessor: "weight"
    },
    {
        Header: "Manufacturer",
        accessor: "manufacturer"    
    },
    {
        Header: "Brand",
        accessor: "brand"    
    },
    {
        Header: "Unit",
        accessor: "unit"
    },
    {
        Header: "SKU",
        accessor: "sku"    
    },
    {
        Header: "UPC",
        accessor: "upc"    
    },
    {
        Header: "EAN",
        accessor: "ean"    
    },
    {
        Header: "MPN",
        accessor: "mpn"    
    },
    {
        Header: "ISBN",
        accessor: "isbn"    
    },
    {
        Header: "Since",
        accessor: "created_at",
        Cell: ({value}) => value && formatDate(value)
    },
    {
        Header: " ",
        Cell: ({row}) => <Link className="btn btn-sm btn-success" href={route("stock.show", row.original.id)}>View Stock</Link>
    }
]

export default Columns