<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SaleOrder extends Model
{
    use HasFactory;

    protected $fillable = [
        "customer_id",
        "track_id",
        "status",
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
        "delivery_at"
    ];
}
