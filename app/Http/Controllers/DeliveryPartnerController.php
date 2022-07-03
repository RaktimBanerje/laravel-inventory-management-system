<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\DeliveryPartner;
use App\Http\Requests\DeliveryPartnerRequest;
use Illuminate\Http\Request;

class DeliveryPartnerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render("DeliveryPartner/Index", [
            "delivery_partners" => DeliveryPartner::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(DeliveryPartnerRequest $request)
    {
        DeliveryPartner::create($request->validated());
        return redirect()->back()->with(["success" => "New Delivery Partner Is Added"]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\DeliveryPartner  $deliveryPartner
     * @return \Illuminate\Http\Response
     */
    public function show(DeliveryPartner $deliveryPartner)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\DeliveryPartner  $deliveryPartner
     * @return \Illuminate\Http\Response
     */
    public function edit(DeliveryPartner $deliveryPartner)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\DeliveryPartner  $deliveryPartner
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, DeliveryPartner $deliveryPartner)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DeliveryPartner  $deliveryPartner
     * @return \Illuminate\Http\Response
     */
    public function destroy(DeliveryPartner $deliveryPartner)
    {
        //
    }
}
