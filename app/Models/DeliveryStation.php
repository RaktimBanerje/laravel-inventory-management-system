<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeliveryStation extends Model
{
    use HasFactory;

    protected $fillable = [
        "name",
        "email",
        "phone",
        "tel_phone",
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
