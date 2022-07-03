import React from "react"
import { formatDate, numberFormatter } from "../../../Components/util"

export const Columns =[
    {
        Header: "Batch No",
        accessor: "batch",
    },
    {
        Header: "Cost Price",
        accessor: "cost_price",
        Cell: ({value}) => value && numberFormatter.format(value)
    },
    {
        Header: "Quantity",
        accessor: "quantity",
        Cell: ({value}) => value && numberFormatter.format(value)
    },

    {
        Header: "MFG",
        accessor: "mfg_at",
        Cell: ({value}) => value && formatDate(value)
    },
    {
        Header: "EXP",
        accessor: "exp_at",
        Cell: ({value}) => value && formatDate(value)
    },
    {
        Header: "Since",
        accessor: "created_at",
        Cell: ({value}) => value && formatDate(value)
    },

]

export default Columns