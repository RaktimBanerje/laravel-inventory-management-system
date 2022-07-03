<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PurchaseOrderItems extends Model
{
    use HasFactory;

    protected $fillable = [
        "purchase_order_id",
        "name",
        "quantity",
        "unit_price",
        "amount",
        "gst"           
    ];
}
