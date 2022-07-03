<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;

class TestController extends Controller
{
    public function index() {
       $customers = Customer::all();
       $head=array(
           "Name","Address"

       );
       $fl=fopen("reports/custo.csv","w");
       fputcsv($fl,$head);
       foreach($customers as $c){
           $x=array($c->first_name, $c->street);
          fputcsv($fl,$x);
       }
       fclose($fl);
    }
}
