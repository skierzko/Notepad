<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MainController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\NotepadController;

Route::get('/', [MainController::class, 'index'])->name('home');

Route::get('dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

Route::prefix('/notepad')->group(function() {
    Route::get('', [NotepadController::class, 'index'])->middleware(['auth', 'verified'])->name('notepad');
});

require __DIR__.'/settings.php';
