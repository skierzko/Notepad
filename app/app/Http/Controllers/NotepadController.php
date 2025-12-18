<?php

namespace App\Http\Controllers;

use App\Models\NotepadCategory;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Auth;

class NotepadController extends Controller
{
    public function index(): Response
    {
        $categories = NotepadCategory::query()->where('user_id', '=', Auth::user()->id)->get();

        return Inertia::render('NotepadMain', [
            'categories' => $categories
        ]);
    }
}
