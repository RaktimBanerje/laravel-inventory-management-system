<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SaleOrderRequest extends FormRequest
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
            "customer_id" => "required",
            "tracking_id" => "sometimes|unique:track",
            "tracking_link" => "sometimes|unique:track",
            "status" => "required",
            "delivery_at" => "sometimes",
            "items"         => "required|array|min:1",
            "items.*.name"      => "required|distinct",
            "items.*.unit_price"=> "required|numeric",
            "items.*.quantity"  => "required|numeric|min:1",
            "items.*.gst"=> "required",
        ];
    }

    public function attributes()
    {
        return [
            "customer_id" => "customer ID",
            "tracking_id" => "tracking ID",
            "status" => "status",
            "delivery_at" => "delivery at",
        ];
    }
}
