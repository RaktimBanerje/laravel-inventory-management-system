<?php

namespace App\Http\Controllers;

use App\Models\Item;
use App\Models\ItemVariations;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $items_data = Item::where("has_attributes", 0)
                       ->select("items.*", "item_variations.attribute", "item_variations.value")
                       ->leftJoin("item_variations", "items.id", "=", "item_variations.item_id")
                       ->get();

        $temp_items = [];    
        foreach($items_data as $key => $value){
            if(!isset($temp_items[$value["id"]])) {
                $temp_items[$value["id"]] = [
                    "id" => $value["id"],
                    "name" => $value["name"],
                    "description" => $value["description"],
                    "unit" => $value["unit"],
                    "cost_price" => $value["cost_price"],
                    "dimensions" => $value["dimensions"],
                    "manufacturer" => $value["manufacturer"],
                    "brand" => $value["brand"],
                    "sku" => $value["sku"],
                    "upc" => $value["upc"],
                    "ean" => $value["ean"],
                    "mpn" => $value["mpn"],
                    "isbn" => $value["isbn"],
                    "created_at" => $value["created_at"],
                    "variations" => []
                ];

                if(isset($value["attribute"])) {
                    $temp_items[$value["id"]]["variations"][] = [
                        "attribute" => $value["attribute"],
                        "value" => $value["value"]
                    ];
                }
            }
            else {
                $temp_items[$value["id"]]["variations"][] = [
                    "attribute" => $value["attribute"],
                    "value" => $value["value"]
                ];
            }
        }

        $items = [];
        foreach($temp_items as $key => $value) {
            $items[] = $value;
        }

        return Inertia::render("Item/Index", ["items" => $items]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render("Item/Create");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $itemType = $request->type;
        
        if($itemType == "single") {
           Item::create($request->all());
           return redirect()->back()->with(["success" => "New Item Is Added"]);
        }
        elseif($itemType == "group"){
            
            $parentItem = Item::create([
                "name" => $request->name,
                "description" => $request->description,
                "brand" => $request->brand,
                "has_attributes" => 1
            ]);


            foreach ($request->variations as $key => $value) {

                $childItem = Item::create([
                    "parent_id" => $parentItem["id"],
                    "name" => $value["name"],
                    "description" => $value["description"],
                    "unit" => $value["unit"],
                    "cost_price" => $value["cost_price"],
                    "dimensions" => $value["dimensions"],
                    "weight" => $value["weight"],
                    "manufacturer" => $value["manufacturer"],
                    "sku" => $value["sku"],
                    "upc" => $value["upc"],
                    "ean" => $value["ean"],
                    "mpn" => $value["mpn"],
                    "isbn" => $value["isbn"],
                ]); 

                foreach ($value["attribute"] as $key => $value) {
                    ItemVariations::create([
                        "item_id" => $childItem["id"],
                        "attribute" => $value["name"],
                        "value" => $value["option"],
                    ]);
                }
            }

            return redirect()->back()->with(["success" => "New Item Is Added"]);
            
        }
        else {
            return redirect()->back();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function show(Item $item)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function edit(Item $item)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Item $item)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function destroy(Item $item)
    {
        //
    }
}
