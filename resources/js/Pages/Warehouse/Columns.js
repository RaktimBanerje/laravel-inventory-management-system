import React from 'react'
import { renderCell, formatDate, DateRangeColumnFilter } from "../../Components/util"

const {addressCell} = renderCell

const Columns = [
    {
        Header: "Name", 
        accessor: "name"
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
        accessor: "phone"
    },
    {
        Header: "Tele phone",
        accessor: "tel_phone"
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
        Header: "Since",
        id: "created_at",
        accessor: originalRow => originalRow.created_at ? formatDate(originalRow.created_at) : "",
        Filter: DateRangeColumnFilter,
        filter: 'dateBetween',   
    }
]

export default Columns