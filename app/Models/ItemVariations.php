<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ItemVariations extends Model
{
    use HasFactory;
    
    protected $fillable = [
        "item_id",
        "attribute",
        "value"
    ];
}
