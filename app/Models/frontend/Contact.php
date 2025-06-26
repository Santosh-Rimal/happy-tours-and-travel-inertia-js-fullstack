<?php

namespace App\Models\frontend;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $fillable=['name','email','subject','phone','message'];
}