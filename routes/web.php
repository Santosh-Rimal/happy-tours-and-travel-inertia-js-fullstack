<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\frontend\ContactController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');


Route::post('contact/store',[ContactController::class,'store'])->name('contacts.store');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
require __DIR__.'/frontend.php';