import React from "react"
import { formatDate, numberFormatter } from "./util"

const Invoice = ({
    seller_name,
    seller_building_no,
    seller_street,
    seller_country,
    seller_state,
    seller_locality,
    seller_area,
    seller_zip,
    seller_email,
    seller_phone_0,
    seller_phone_1,

    billing_name_salutaion,
    billing_name_first_name,
    billing_name_middle_name,
    billing_name_last_name,
    billing_building_no,
    billing_street,
    billing_country,
    billing_state,
    billing_locality,
    billing_area,
    billing_zip,
    billing_email,
    billing_phone_0,
    billing_phone_1,
    
    shipping_name_salutaion,
    shipping_name_first_name,
    shipping_name_middle_name,
    shipping_name_last_name,
    shipping_building_no,
    shipping_street,
    shipping_country,
    shipping_state,
    shipping_locality,
    shipping_area,
    shipping_zip,
    shipping_email,
    shipping_phone_0,
    shipping_phone_1,

    order_number,
    order_date,
    order_price,

    items
}) => {
    return (
        <div id="invoice" className="container-fluid mt-100 mb-100">
            <div className="card">
                <div className="card-body">
                    <div id="invoice-header">
                        <div className="row">
                            <div className="col d-flex flex-column align-items-center justify-content-center">
                                <img src="/assets/img/brand/logo.png" style={{height: "62px"}} alt="..." />
                                <h2 className="my-2">Tax Invoice/Bill of Supply/Cash Memo</h2>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-sm-6">
                                <h3 className="mb-3">Sold By:</h3>
                                <div><strong>{seller_name}</strong></div>
                                <div>{seller_building_no} {seller_street} {seller_area}, {seller_locality} - {seller_zip}</div>
                                <div>{seller_state} {seller_country}</div>
                                <div>Email: {seller_email}</div>
                                <div>Phone: {seller_phone_0}</div>
                            </div>
                            <div className="col-sm-6">
                                <h3 className="mb-3 text-right">Billing Address:</h3>
                                <div className="text-right"><strong>{billing_name_salutaion} {billing_name_first_name} {billing_name_middle_name} {billing_name_last_name}</strong></div>
                                <div className="text-right">{billing_building_no} {billing_street} {billing_area}, {billing_locality} - {billing_zip}</div>
                                <div className="text-right">{billing_state} {billing_country}</div>
                                <div className="text-right">Email: {billing_email}</div>
                                <div className="text-right">Phone: {billing_phone_0}</div>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-sm-6">
                                <h3 className="mb-3">Order Details:</h3>
                                <div>Order Number: {order_number}</div>
                                <div>Order Date: {formatDate(order_date)}</div>
                            </div>
                            <div className="col-sm-6">
                                <h3 className="mb-3 text-right">Shipping Address:</h3>
                                <div className="text-right"><strong>{shipping_name_salutaion} {shipping_name_first_name} {shipping_name_middle_name} {shipping_name_last_name}</strong></div>
                                <div className="text-right">{shipping_building_no} {shipping_street} {shipping_area}, {shipping_locality} - {shipping_zip}</div>
                                <div className="text-right">{shipping_state} {shipping_country}</div>
                                <div className="text-right">Email: {shipping_email}</div>
                                <div className="text-right">Phone: {shipping_phone_0}</div>
                            </div>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>ITEM</th>
                                    <th>UNIT PRICE</th>
                                    <th>QUANTITY</th>
                                    <th>NET AMOUNT</th>
                                    <th>GST</th>
                                    <th>TOTAL AMOUNT</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item, idx)=> (
                                        <tr key={idx}>
                                            <td>{idx + 1}</td>
                                            <td>{item.item_name}</td>
                                            <td>INR {numberFormatter.format(item.item_unit_price)}</td>
                                            <td>{item.item_quantity}</td>
                                            <td>INR {numberFormatter.format(Number(item.item_quantity * item.item_unit_price))}</td>
                                            <td>{item.item_gst}</td>
                                            <td>INR {numberFormatter.format(Number(item.item_quantity * item.item_unit_price))}</td>
                                        </tr> 
                                ))}
                                <tr>
                                    <td colspan="7"></td>
                                </tr>
                                <tr>
                                    <td colspan="6"></td>
                                    <td className="right"><strong>Total:  INR {numberFormatter.format(order_price)}</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Invoice