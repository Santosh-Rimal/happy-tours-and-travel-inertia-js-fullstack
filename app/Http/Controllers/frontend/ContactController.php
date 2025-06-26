<?php

namespace App\Http\Controllers\frontend;

use Illuminate\Http\Request;
use App\Models\frontend\Contact;
use App\Http\Controllers\Controller;
use App\Http\Requests\frontend\StoreContactRequest;

class ContactController extends Controller
{
    public function store(StoreContactRequest $request)
    {
        $contacts=Contact::create($request->all());
        if($contacts){
            return redirect()->back()->with('success', 'Message sent successfully!');
        }
        return redirect()->back();
    }
}