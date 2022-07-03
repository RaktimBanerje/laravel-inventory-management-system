<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class VendorRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "company_name"  => "required",
            "display_name"  => "required",
            "email"  => "required|unique:vendors",
            "phone_0"  => "required",
            "phone_1"  => "sometimes",
            "gst_treatment" => "required",
            "price_list" => "sometimes",
            "currency" => "required",
            "building_no" => "required" ,
            "street" => "required" ,
            "country" => "required" ,
            "state" => "required" ,
            "locality" => "required" ,
            "zip" => "required" , 
            "area" => "required" ,
            "land_mark" => "sometimes",
            "latitude" => "sometimes",
            "longitude" => "sometimes",
        ];
    }
}
