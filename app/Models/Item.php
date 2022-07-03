<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;

    protected $fillable = [
        "parent_id",
        "name",
        "description",
        "unit",
        "cost_price",
        "dimensions",
        "weight",
        "manufacturer",
        "brand",
        "sku",
        "upc",
        "ean",
        "mpn",
        "isbn",
        "has_attributes",
        "composites",
    ];
}
