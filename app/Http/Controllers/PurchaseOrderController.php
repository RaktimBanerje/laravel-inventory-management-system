<?php

namespace App\Http\Controllers;

use App\Http\Requests\PurchaseOrderRequest;
use Inertia\Inertia;
use App\Models\PurchaseOrder;
use App\Models\PurchaseOrderItems;
use App\Models\Customer;
use App\Models\Vendor;
use App\Models\Warehouse;
use Illuminate\Http\Request;

class PurchaseOrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $purchase_orders_data_1 = PurchaseOrder::whereNotNull("purchase_orders.warehouse_id")
            ->select(
                "purchase_orders.id AS order_id",
                "purchase_orders.price AS order_price",
                "purchase_orders.created_at",
                "warehouses.id AS warehouse_id",
                "warehouses.name AS warehouse_name",
                "vendors.id AS vendor_id",
                "vendors.company_name AS vendor_name",
            )
            ->join('warehouses', "purchase_orders.warehouse_id", "=", "warehouses.id")
            ->join('vendors', "purchase_orders.vendor_id", "=", "vendors.id")
            ->get();

        $purchase_orders_data_2 = PurchaseOrder::whereNotNull("purchase_orders.customer_id")
            ->select(
                "purchase_orders.id AS order_id",
                "purchase_orders.price AS order_price",
                "purchase_orders.created_at",
                "customers.id as customer_id",
                "customers.salutaion as customer_salutaion",
                "customers.first_name as customer_first_name",
                "customers.middle_name as customer_middle_name",
                "customers.last_name as customer_last_name",
                "vendors.id AS vendor_id",
                "vendors.company_name AS vendor_name",
            )
            ->join('customers', "purchase_orders.customer_id", "=", "customers.id")
            ->join('vendors', "purchase_orders.vendor_id", "=", "vendors.id")
            ->get();

        $orders_list_1 = [];
        $orders_list_2 = [];

        foreach($purchase_orders_data_1 as $key => $value) {
            $orders_list_1[] = $value;
        }

        foreach($purchase_orders_data_2 as $key => $value) {
            $orders_list_2[] = $value;
        }


        return Inertia::render("PurchaseOrder/Index", ["purchase_orders" => array_merge($orders_list_1, $orders_list_2)]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render("PurchaseOrder/Create", [
            "customers" => Customer::select("id", "first_name", "middle_name", "last_name")->get(),
            "warehouses" => Warehouse::select("id", "name")->get(),
            "vendors" => Vendor::select("id", "display_name")->get()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PurchaseOrderRequest $request)
    {
        if($request->delivery_to == "warehouse"){
            $shipping_address = Warehouse::where('id', $request->receiver)->select("street", "country", "state", "building_no", "locality", "area", "land_mark", "zip")->get();
        }
        elseif($request->delivery_to == "customer"){
            $shipping_address = Customer::where('id', $request->receiver)->select("street", "country", "state", "building_no", "locality", "area", "land_mark", "zip")->get();
        }
        else {
            return redirect()->back();
        }

        $street = $building_no = $country = $state = $locality = $area = $land_mark = $zip = null;

        foreach($shipping_address as $key => $address) {
            $street = $address["street"];
            $building_no = $address["building_no"];
            $country = $address["country"];
            $state = $address["state"];
            $locality = $address["locality"];
            $area = $address["area"];
            $land_mark = $address["land_mark"];
            $zip = $address["zip"];
        }   

        $price = 0.0;

        foreach($request->items as $key => $value) {
            $price += $value["unit_price"] * $value["quantity"]; 
        }

        $order = PurchaseOrder::create([
            "vendor_id" => $request->vendor,
            "warehouse_id" => $request->delivery_to == "warehouse" ? $request->receiver : null,
            "customer_id" => $request->delivery_to == "customer" ? $request->receiver : null,
            "price" => $price,
            "gst" => $request->gst,
            "shipping_building_no" => $building_no,
            "shipping_street" => $street,
            "shipping_country" => $country,
            "shipping_state" => $state,
            "shipping_locality" => $locality,
            "shipping_area" => $area,
            "shipping_land_mark" => $land_mark,
            "shipping_zip" => $zip
        ]);

        foreach($request->items as $key => $value) {
            PurchaseOrderItems::create([
                "purchase_order_id" => $order["id"],
                "name" => $value["name"],
                "quantity" => $value["quantity"],
                "unit_price" => $value["unit_price"],
                "amount" => $value["quantity"] * $value["unit_price"],
                "gst" => $value["gst"]
            ]);
        }

        return redirect()->back()->with(["success" => "New Purchase Order Created"]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PurchaseOrder  $purchaseOrder
     * @return \Illuminate\Http\Response
     */
    public function show(PurchaseOrder $purchaseOrder)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\PurchaseOrder  $purchaseOrder
     * @return \Illuminate\Http\Response
     */
    public function edit(PurchaseOrder $purchaseOrder)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\PurchaseOrder  $purchaseOrder
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PurchaseOrder $purchaseOrder)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PurchaseOrder  $purchaseOrder
     * @return \Illuminate\Http\Response
     */
    public function destroy(PurchaseOrder $purchaseOrder)
    {
        //
    }
}
