<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SaleOrderItems extends Model
{
    use HasFactory;

    protected $fillable = [
        "sale_order_id",
        "name",
        "quantity",
        "unit_price",
        "amount",
        "gst"           
    ];
}
