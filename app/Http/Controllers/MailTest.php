<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\Test;

class MailTest extends Controller
{
    public function index() {
        Mail::to("raktimbanerjee9@gmail.com")->send(new Test());
    }
}
