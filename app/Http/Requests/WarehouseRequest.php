<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class WarehouseRequest extends FormRequest
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
            "name"          => "required|unique:warehouses",
            "email"         => "required|email|unique:warehouses",
            "phone"         => "required|numeric|min:10",
            "tel_phone"     => "required|numeric|min:10",
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
            "locality"         => "city",
            "building_no"      => "building no",
            "tel_phone"        => "telephone number",
            "zip"              => "ZIP code",
            "email"            => "email address"
        ];
    }

    public function messages()
    {
        return [
            //
        ];
    }

}
