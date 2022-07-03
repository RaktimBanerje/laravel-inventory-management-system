<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    protected $fillable =[
        "salutaion",
        "first_name",
        "middle_name",
        "last_name",
        "sex",
        "company_name",
        "customer_display_name",
        "email",
        "phone_0",
        "phone_1",
        "gst_treatment",
        "gstin",
        "pan",
        "aadhar",
        "currency",
        "skype",
        "facebook",
        "twitter",
        "website",
        "price_list",
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
