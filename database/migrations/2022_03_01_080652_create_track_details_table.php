<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTrackDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('track_details', function (Blueprint $table) {
            $table->id();
            $table->foreignId("track_id")->constrained()->onUpdate("cascade")->onDelete("restrict");
            $table->foreignId("delivery_station_id")->constrained()->onUpdate("cascade")->onDelete("restrict");
            $table->dateTime("leaved_at");            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('track_details');
    }
}
