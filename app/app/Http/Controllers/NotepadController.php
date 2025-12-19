<?php

namespace App\Http\Controllers;

use App\Http\Requests\SaveFolderRequest;
use App\Models\Notepad;
use App\Models\NotepadCategory;
use Illuminate\Http\JsonResponse;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Auth;

class NotepadController extends Controller
{
    public function index(): Response
    {
        $categories = NotepadCategory::query()->where('user_id', '=', Auth::user()->id)->get();
        $notepadNotes = Notepad::query()->where('user_id', '=', Auth::user()->id)->get();

        return Inertia::render('NotepadMain', [
            'foldersList' => $categories,
            'notesList' => $notepadNotes,
        ]);
    }

    public function saveFolder(SaveFolderRequest $request)
    {
        $userId = Auth::user()->id;
        /** @var NotepadCategory $category */
        $category = $request->has('id')
        ? NotepadCategory::query()->where('id', '=', $request->has('id'))->where('user_id', '=', $userId)->first()
        : new NotepadCategory();

        $category->user_id = $userId;
        $category->title = $request->get('name');
        $isSaved = $category->save();

        return redirect()->back()->with('success', $isSaved);

    }
}
