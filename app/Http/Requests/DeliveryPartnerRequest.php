<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DeliveryPartnerRequest extends FormRequest
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
            "name" => "required",
            "email" => "required|unique:delivery_partners",
            "phone" => "required|unique:delivery_partners",
            "tel_phone" => "sometimes",
            "website" => "sometimes",
            "building_no" => "required",
            "street" => "required",
            "country" => "required",
            "state" => "required",
            "locality" => "required",
            "zip" =>  "required",
            "area" => "required",
            "land_mark" =>  "sometimes",
            "latitude" =>  "sometimes",
            "longitude" => "sometimes"
        ];
    }

    public function attributes()
    {
        return [
            "email" => "email address",
            "tel_phone" => "telephone number",
            "building_no" => "building no"
        ];
    }
}
