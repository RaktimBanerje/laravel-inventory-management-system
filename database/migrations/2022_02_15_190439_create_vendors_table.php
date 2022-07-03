<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVendorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vendors', function (Blueprint $table) {
            $table->id();
            $table->string("company_name") ;
            $table->string("display_name") ;
            $table->string("email") ;
            $table->string("phone_0") ;
            $table->string("phone_1")->nullable() ;
            $table->string("gst_treatment") ;
            $table->string("price_list") ;
            $table->string("currency") ;
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
        Schema::dropIfExists('vendors');
    }
}
