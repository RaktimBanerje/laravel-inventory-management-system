<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TrackRequest extends FormRequest
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
            "delivery_partner_id" => "required",
            "tracking_id" => "required",
            "tracking_link" => "sometimes"
        ];
    }

    public function attributes() 
    {
        return [
            "delivery_partner" => "delivery partner",
            "tracking_id" => "tracking ID",
            "tracking_link" => "tracking link"
        ];
    }
}
