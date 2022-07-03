<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Models\Customer;
use App\Models\Item;
use App\Models\SaleOrder;
use App\Models\SaleOrderItems;
use App\Models\Track;
use Inertia\Inertia;

class SaleOrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sale_orders = SaleOrder::select(
            "customers.salutaion", 
            "customers.first_name", 
            "customers.middle_name", 
            "customers.last_name",
            "customers.email",
            "customers.phone_0",
            "customers.phone_1",
            "sale_orders.id",
            "sale_orders.price",
            "sale_orders.status",
            "sale_orders.delivery_at",
            "sale_orders.created_at",
            "tracks.tracking_id",
            "tracks.tracking_link"
        )
        ->join("customers", "customers.id", "=", "sale_orders.customer_id")
        ->join("tracks", "tracks.id", "=", "sale_orders.track_id")
        ->get();

        return Inertia::render("SaleOrder/Index", ["sale_orders" => $sale_orders]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render("SaleOrder/Create", [
            "customers" => Customer::select("id", "first_name", "middle_name", "last_name")->get(),
            "items" => Item::where("has_attributes", 0)->select("id", "name", "unit", "cost_price", "sku")->get()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $shipping_address = Customer::where('id', $request->customer)->select("street", "country", "state", "building_no", "locality", "area", "land_mark", "zip")->get();

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

        $track = Track::create();

        $order = SaleOrder::create([
            "customer_id" => $request->customer,
            "track_id" => $track["id"],
            "price" => $price,
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
            SaleOrderItems::create([
                "sale_order_id" => $order["id"],
                "name" => $value["name"],
                "quantity" => $value["quantity"],
                "unit_price" => $value["unit_price"],
                "amount" => $value["quantity"] * $value["unit_price"],
                "gst" => $value["gst"]
            ]);
        }

        return redirect()->back()->with(["success" => "New Sale Order Created"]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SaleOrder  $saleOrder
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        $sale_order = SaleOrder::where("sale_orders.id", $id)
                        ->select(
                            "customers.salutaion                       AS billing_name_salutaion",
                            "customers.first_name                      AS billing_name_first_name",
                            "customers.middle_name                     AS billing_name_middle_name",
                            "customers.last_name                       AS billing_name_last_name",
                            "customers.building_no                     AS billing_building_no",
                            "customers.street                          AS billing_street",
                            "customers.country                         AS billing_country",
                            "customers.state                           AS billing_state",
                            "customers.locality                        AS billing_locality",
                            "customers.area                            AS billing_area",
                            "customers.land_mark                       AS billing_land_mark",
                            "customers.zip                             AS billing_zip",
                            "customers.email                           AS billing_email",
                            "customers.phone_0                         AS billing_phone_0",
                            "customers.phone_1                         AS billing_phone_1",
                                
                            "customers.salutaion                       AS shipping_name_salutaion",
                            "customers.first_name                      AS shipping_name_first_name",
                            "customers.middle_name                     AS shipping_name_middle_name",
                            "customers.last_name                       AS shipping_name_last_name",
                            "sale_orders.shipping_building_no          AS shipping_building_no",
                            "sale_orders.shipping_street               AS shipping_street",
                            "sale_orders.shipping_country              AS shipping_country",
                            "sale_orders.shipping_state                AS shipping_state",
                            "sale_orders.shipping_locality             AS shipping_locality",
                            "sale_orders.shipping_area                 AS shipping_area",
                            "sale_orders.shipping_land_mark            AS shipping_land_mark",
                            "sale_orders.shipping_zip                  AS shipping_zip",
                            "customers.email                           AS shipping_email",
                            "customers.phone_0                         AS shipping_phone_0",
                            "customers.phone_1                         AS shipping_phone_1",

                            "sale_orders.id                            AS order_number",
                            "sale_orders.price                         AS order_price",
                            "sale_orders.created_at                    AS order_date",
                        
                            "tracks.tracking_id                        AS tracking_id",
                            "tracks.tracking_link                      AS tracking_link",
                        ) 
                        ->join("customers", "sale_orders.customer_id", "=", "customers.id")
                        ->join("tracks", "sale_orders.track_id", "=", "tracks.id")
                        ->get()
                        ->first()
                        ->toArray();

        $sale_order["seller_name"] = "Laravel";
        $sale_order["seller_building_no"] = "29E/1";
        $sale_order["seller_street"] = "Rammohan Mukerjee Lane";
        $sale_order["seller_country"] = "India";
        $sale_order["seller_state"] = "West Bengal";
        $sale_order["seller_locality"] = "Howrah";
        $sale_order["seller_area"] = "Shibpur";
        $sale_order["seller_zip"] = "711102";
        $sale_order["seller_email"] = "raktimbanerjee9@gmail.com";
        $sale_order["seller_phone_0"] = "9836739907";
        $sale_order["seller_phone_1"] = "9903811256";
        $sale_order["items"] = SaleOrderItems::where("sale_order_id", $sale_order["order_number"])
                                ->select(
                                    "name       AS item_name", 
                                    "unit_price AS item_unit_price", 
                                    "quantity   AS item_quantity", 
                                    "gst        AS item_gst"
                                )
                                ->get()
                                ->toArray();;


        return response()->json($sale_order);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\SaleOrder  $saleOrder
     * @return \Illuminate\Http\Response
     */
    public function edit(SaleOrder $saleOrder)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SaleOrder  $saleOrder
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SaleOrder $saleOrder)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SaleOrder  $saleOrder
     * @return \Illuminate\Http\Response
     */
    public function destroy(SaleOrder $saleOrder)
    {
        //
    }
}
