<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StockRequest extends FormRequest
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
            "item_id" => "required",
            "quantity" => "required",
            "batch" => "required",
            "cost_price" => "required",
            "mfg_at" => "required",
            "exp_at" => "sometimes"
        ];
    }

    public function attributes() 
    {
        return [
            "batch" => "batch/ lot no.",
            "cost_price" => "cost price"
        ];
    }
}
