<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\frontend\ContactController;

Route::get('/index',function(){
    return Inertia::render('frontend/index');
})->name('index');





Route::get('/treks/{id}',function(){
return Inertia::render('frontend/trekpackage');
// dd("Hello");
})->name('treks.show');
Route::get('/blog/{id}', function(){
return Inertia::render('frontend/blogpost');
})->name('blog.show');
Route::get('/gallery/{id}', function(){
return Inertia::render('frontend/galleryimage');
})->name('gallery.show');
Route::get('/team/{id}', function(){
return Inertia::render('frontend/teammember');
})->name('team.show');

Route::post('contact/store',[ContactController::class,'store'])->name('contacts.store');