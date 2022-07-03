<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PurchaseOrder extends Model
{
    use HasFactory;

    protected $fillable = [
        "vendor_id",
        "warehouse_id",
        "customer_id",
        "price",
        "shipping_building_no",
        "shipping_street",
        "shipping_country",
        "shipping_state",
        "shipping_locality",
        "shipping_zip", 
        "shipping_area",
        "shipping_land_mark",
        "shipping_latitude",
        "shipping_longitude",
    ];
}
