<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CustomerRequest extends FormRequest
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
            "salutaion" => "required" ,
            "first_name" => "required" ,
            "middle_name" => "required" ,
            "last_name" => "required" ,
            "sex" => "required" ,
            "company_name" => "required" ,
            "customer_display_name" => "required" ,
            "email" => "required" ,
            "phone_0" => "required" ,
            "phone_1" => "required" ,
            "gst_treatment" => "required" ,
            "gstin" => "required" ,
            "pan" => "required|unique:customers" ,
            "aadhar" => "required|unique:customers" ,
            "currency" => "required" ,
            "skype" => "sometimes",
            "facebook" => "sometimes",
            "twitter" => "sometimes",
            "website" => "sometimes",
            "price_list" => "sometimes",
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

    public function attributes()
    {
        return [
            //
        ];
    }

    public function messages()
    {
        return [
            //
        ];
    }
}
