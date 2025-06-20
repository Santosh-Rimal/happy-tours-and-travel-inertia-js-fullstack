<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/index',function(){
    return Inertia::render('frontend/index');
})->name('index');