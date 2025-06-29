<?php

use App\Http\Controllers\backend\ContactController as BackendContactController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');




Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::name('backend.')->resource('contacts',BackendContactController::class)->except('edit','update','store','create');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
require __DIR__.'/frontend.php';