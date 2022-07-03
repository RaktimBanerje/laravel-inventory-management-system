<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\DeliveryStation;
use App\Http\Requests\DeliveryStationRequest;
use Illuminate\Http\Request;

class DeliveryStationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render("DeliveryStation/Index", [
            "delivery_stations" => DeliveryStation::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(DeliveryStationRequest $request)
    {
        DeliveryStation::create($request->validated());
        return redirect()->back()->with(["success" => "New Warehouse Is Added"]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\DeliveryStation  $deliveryStation
     * @return \Illuminate\Http\Response
     */
    public function show(DeliveryStation $deliveryStation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\DeliveryStation  $deliveryStation
     * @return \Illuminate\Http\Response
     */
    public function edit(DeliveryStation $deliveryStation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\DeliveryStation  $deliveryStation
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, DeliveryStation $deliveryStation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DeliveryStation  $deliveryStation
     * @return \Illuminate\Http\Response
     */
    public function destroy(DeliveryStation $deliveryStation)
    {
        //
    }
}
