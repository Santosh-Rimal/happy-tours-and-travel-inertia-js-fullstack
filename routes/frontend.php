<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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