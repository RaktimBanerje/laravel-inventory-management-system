<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->string("salutaion");
            $table->string("first_name");
            $table->string("middle_name");
            $table->string("last_name");
            $table->string("sex");
            $table->string("company_name");
            $table->string("customer_display_name");
            $table->string("email");
            $table->string("phone_0");
            $table->string("phone_1");
            $table->string("gst_treatment");
            $table->string("gstin");
            $table->string("pan")->unique();
            $table->string("aadhar")->unique();
            $table->string("currency");
            $table->string("skype")->nullable();
            $table->string("facebook")->nullable();
            $table->string("twitter")->nullable();
            $table->string("website");
            $table->string("price_list")->nullable();
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
        Schema::dropIfExists('customers');
    }
}
