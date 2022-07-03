<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\CustomerController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\WarehouseController;
use App\Http\Controllers\VendorController;
use App\Http\Controllers\PurchaseOrderController;
use App\Http\Controllers\SaleOrderController;
use App\Http\Controllers\DeliveryStationController;
use App\Http\Controllers\DeliveryPartnerController;
use App\Http\Controllers\TrackController;
use App\Http\Controllers\StockController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect("/login");

    // return Inertia::render('Welcome', [
    //     'canLogin' => Route::has('login'),
    //     'canRegister' => Route::has('register'),
    //     'laravelVersion' => Application::VERSION,
    //     'phpVersion' => PHP_VERSION,
    // ]);
});

Route::group([
    "middleware" => ['auth:sanctum', 'verified']
], function () {

    Route::get("/dashboard", function () {
        return Inertia::render('Dashboard');
    })->name("dashboard");

    Route::resources([
        "customer"  => CustomerController::class,
        "item"   => ItemController::class,
        "warehouse" => WarehouseController::class,
        "vendor" => VendorController::class,
        "sale-order" => SaleOrderController::class,
        "purchase-order" => PurchaseOrderController::class,
        "delivery-station" => DeliveryStationController::class,
        "delivery-partner" => DeliveryPartnerController::class,
        "stock" => StockController::class
    ]);

});