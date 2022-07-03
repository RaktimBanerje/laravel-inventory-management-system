import React from 'react'
import { renderCell, formatDate, DateRangeColumnFilter } from "../../Components/util"

const {addressCell} = renderCell

const Columns = [
    {
        Header: "#", 
        accessor: "id"
    },
    {
        Header: "Name", 
        accessor: "company_name"
    },
    {
        Header: "Display name",
        accessor: "display_name"
    },
    {
        Header: "Address", 
        id: "address",
        accessor: originalRow => addressCell(originalRow)
    },
    {
        Header: "Email address",
        accessor: "email"
    },
    {
        Header: "Mobile",
        accessor: "phone_0"
    },
    {
        Header: "Tele phone",
        accessor: "phone_1"
    },
    {
        Header: "State",
        accessor: "state"
    },
    {
        Header: "Country",
        accessor: "country"
    },
    {
        Header: "GST treatment",
        accessor: "gst_treatment"
    },
    {
        Header: "Currency",
        accessor: "currency"
    },
    {
        Header: "Since",
        id: "created_at",
        accessor: originalRow => originalRow.created_at ? formatDate(originalRow.created_at) : "",
        Filter: DateRangeColumnFilter,
        filter: 'dateBetween',   
    }
]

export default Columns