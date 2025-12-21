<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MainController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\NotepadController;

Route::get('/', [MainController::class, 'index'])->name('home');

Route::get('dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

Route::prefix('/notepad')->middleware(['auth', 'verified'])->group(function() {
    Route::get('', [NotepadController::class, 'index'])->name('notepad');

    Route::post('folder', [NotepadController::class, 'saveFolder'])->name('save-folder');

    Route::get('folder/{notepadFolder}/notes-list', [NotepadController::class, 'getNotesListByFolderId'])->name('get-notes-list');
    Route::get('folder/{notepadFolder}/{notepadNote?}', [NotepadController::class, 'getNote'])->name('get-note');
    Route::post('folder/{notepadFolder}/create-note', [NotepadController::class, 'createNote'])->name('create-note');
    Route::post('folder/{notepadFolder}/{notepadNote?}', [NotepadController::class, 'saveNote'])->name('save-note');
});

require __DIR__.'/settings.php';
