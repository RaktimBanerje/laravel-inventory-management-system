<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('items', function (Blueprint $table) {
            $table->id();
            $table->bigInteger("parent_id")->nullable();
            $table->string("name")->unique();
            $table->string("description")->nullable();
            $table->string("unit")->nullable();
            $table->float("cost_price")->nullable();
            $table->string("dimensions")->nullable();
            $table->float("weight")->nullable();
            $table->string("manufacturer")->nullable();
            $table->string("brand")->nullable();
            $table->string("sku")->unique()->nullable();
            $table->string("upc")->unique()->nullable();
            $table->string("ean")->unique()->nullable();
            $table->string("mpn")->unique()->nullable();
            $table->string("isbn")->unique()->nullable();
            $table->boolean("has_attributes")->default(0);
            $table->string("composites")->nullable();
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
        Schema::dropIfExists('items');
    }
}
