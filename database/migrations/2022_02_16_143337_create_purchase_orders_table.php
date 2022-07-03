<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;


class CreatePurchaseOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('purchase_orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId("vendor_id")->constrained()->onUpdate("cascade")->onDelete("restrict");
            $table->foreignId("warehouse_id")->nullable()->constrained()->onUpdate("cascade")->onDelete("restrict");
            $table->foreignId("customer_id")->nullable()->constrained()->onUpdate("cascade")->onDelete("restrict");
            $table->float("price");
            $table->string("shipping_building_no");
            $table->string("shipping_street");
            $table->string("shipping_country");
            $table->string("shipping_state");
            $table->string("shipping_locality");
            $table->string("shipping_zip"); 
            $table->string("shipping_area");
            $table->string("shipping_land_mark")->nullable();
            $table->string("shipping_latitude")->nullable();
            $table->string("shipping_longitude")->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('purchase_orders');
    }
}
