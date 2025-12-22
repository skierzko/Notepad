<?php

namespace App\Http\Controllers;

use App\Http\Requests\SaveFolderRequest;
use App\Models\NotepadNote;
use App\Models\NotepadFolder;
use Illuminate\Http\JsonResponse;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Auth;

class NotepadController extends Controller
{
    public function index(): Response
    {
        $categories = NotepadFolder::query()->where('user_id', '=', Auth::user()->id)->get();

        return Inertia::render('NotepadMain', [
            'foldersList' => $categories,
        ]);
    }

    public function saveFolder(SaveFolderRequest $request)
    {
        $userId = Auth::user()->id;
        /** @var NotepadFolder $notepadFolder */
        $notepadFolder = $request->has('id')
        ? NotepadFolder::query()->where('id', '=', $request->has('id'))->where('user_id', '=', $userId)->first()
        : new NotepadFolder();

        $notepadFolder->user_id = $userId;
        $notepadFolder->title = $request->get('name');
        $isSaved = $notepadFolder->save();

        return redirect()->back()->with('success', $isSaved);
    }

    public function getNotesListByFolderId(NotepadFolder $notepadFolder): JsonResponse
    {
        $notes = NotepadNote::query()->where('notepad_folder_id', '=', $notepadFolder->id)->get(); 

        return response()->json([
            'status' => true,
            'list' => $notes,
        ]);
    }

    public function getNote(NotepadFolder $notepadFolder, ?NotepadNote $notepadNote): JsonResponse
    {
        if ($notepadNote?->notepad_folder_id !== $notepadFolder->id) {
            return response()->json([
                'status' => false,
                'note' => []
            ]);
        }

        return response()->json([
            'status' => true,
            'note' => $notepadNote
        ]);
    }

    public function createNote(NotepadFolder $notepadFolder): JsonResponse
    {
        $note = new NotepadNote();
        $note->user_id = Auth::user()->id;
        $note->notepad_folder_id = $notepadFolder->id;
        $note->title = 'New note';

        $isSaved = $note->save();

        return response()->json([
            'success' => $isSaved,
            'note' => $isSaved ? $note : null,
        ]);
    }

    public function saveNote(NotepadFolder $notepadFolder, ?NotepadNote $notepadNote): JsonResponse
    {
        // @todo

        return response()->json([
            'status' => true,
            'note' => []
        ]);
    }
}
