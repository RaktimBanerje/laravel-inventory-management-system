import React from 'react'
import { renderCell, formatDate, DateRangeColumnFilter } from "../../Components/util"

const {addressCell} = renderCell

const Columns = [
    {
        Header: "#", 
        accessor: "id"
    },
    {
        Header: "Customer",
        id: "name",
        accessor: originalRow => `${originalRow.salutaion} ${originalRow.first_name} ${originalRow.middle_name} ${originalRow.last_name}`,
    },
    {
        Header: "Display name",
        accessor: "customer_display_name"
    },
    {
        Header: "Sex",
        accessor: "sex"
    },
    {
        Header: "Company name",
        accessor: "company_name"
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
        Header: "GSTIN",
        accessor: "gstin"
    },
    {
        Header: "PAN",
        accessor: "pan"
    },
    {
        Header: "AADHAR",
        accessor: "aadhar"
    },
    {
        Header: "Currency",
        accessor: "currency"
    },
    {
        Header: "skype",
        accessor: "skype"
    },
    {
        Header: "facebook",
        accessor: "facebook"
    },
    {
        Header: "twitter",
        accessor: "twitter"
    },
    {
        Header: "website",
        accessor: "website"
    },
    {
        Header: "Price List",
        accessor: "price_list"
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