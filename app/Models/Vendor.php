<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vendor extends Model
{
    use HasFactory;

    protected $fillable = [
        "company_name" ,
        "display_name" ,
        "email" ,
        "phone_0" ,
        "phone_1" ,
        "gst_treatment",
        "price_list",
        "currency",
        "building_no",
        "street",
        "country",
        "state",
        "locality",
        "zip", 
        "area",
        "land_mark",
        "latitude",
        "longitude",
    ];
}
