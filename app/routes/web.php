<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MainController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\NotepadController;

Route::get('/', [MainController::class, 'index'])->name('home');

Route::get('dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

Route::prefix('/notepad')->middleware(['auth', 'verified'])->group(function() {
    Route::get('', [NotepadController::class, 'index'])->name('notepad');
    Route::post('save-folder', [NotepadController::class, 'saveFolder'])->name('save-folder');
});

require __DIR__.'/settings.php';
