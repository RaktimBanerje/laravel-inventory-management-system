<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PurchaseOrderRequest extends FormRequest
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
            "vendor"        => "required",
            "delivery_to"   => "required",
            "receiver"      => "required",
            "items"         => "required|array|min:1",
            "items.*.name"      => "required|distinct",
            "items.*.quantity"  => "required|numeric|min:1",
            "items.*.unit_price"=> "required|numeric",
            "items.*.gst"=> "required",
        ];
    }
}
