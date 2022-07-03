<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWarehousesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('warehouses', function (Blueprint $table) {
            $table->id();
            $table->string("name")->unique();
            $table->string("email")->unique();
            $table->string("phone");
            $table->string("tel_phone");
            $table->string("building_no");
            $table->string("street");
            $table->string("country");
            $table->string("state");
            $table->string("locality");
            $table->string("zip"); 
            $table->string("area");
            $table->string("land_mark")->nullable();
            $table->string("latitude")->nullable();
            $table->string("longitude")->nullable();
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
        Schema::dropIfExists('warehouses');
    }
}
