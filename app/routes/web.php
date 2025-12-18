<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    if (Auth::check()) {
        return redirect('/login');
    }

    return redirect('/notes');
})->name('home');

Route::get('dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('notes', function () {
    return Inertia::render('NotesMain');
})->middleware(['auth', 'verified'])->name('notes');

require __DIR__.'/settings.php';
