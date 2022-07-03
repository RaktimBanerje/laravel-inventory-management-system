<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TrackDetails extends Model
{
    use HasFactory;

    protected $fillable = [
        "track_id",
        "delivery_station_id",
        "leaved_at"            
    ];
}
