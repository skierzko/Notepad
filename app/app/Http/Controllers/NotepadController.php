<?php

namespace App\Http\Controllers;

use App\Http\Requests\SaveFolderRequest;
use App\Http\Requests\SaveNoteRequest;
use App\Models\NotepadNote;
use App\Models\NotepadFolder;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

class NotepadController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('NotepadMain');
    }

    public function getFolders(): JsonResponse
    {
        $userId = Auth::user()->id;
        $folders = NotepadFolder::query()->where('user_id', '=', $userId)->get();

        return response()->json([
            'status' => true,
            'folders' => $folders,
        ]);
    }

    public function saveFolder(SaveFolderRequest $request)
    {
        $userId = Auth::user()->id;
        $folderId = $request->input('id');
        /** @var NotepadFolder $notepadFolder */
        $notepadFolder = $folderId
        ? NotepadFolder::query()->where('id', '=', $folderId)->where('user_id', '=', $userId)->first()
        : new NotepadFolder();

        $notepadFolder->user_id = $userId;
        $notepadFolder->title = $request->input('name');
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

    public function saveNote(SaveNoteRequest $request, NotepadFolder $notepadFolder, ?NotepadNote $notepadNote): JsonResponse
    {
        $notepadNote->title = $request->input('title', $notepadNote->title);
        $notepadNote->description = $request->input('description', $notepadNote->description);
        $notepadNote->save();   

        return response()->json([
            'status' => $notepadNote->save(),
            'note' => $notepadNote
        ]);
    }

    public function deleteFolder(Request $request): JsonResponse
    {
        $folderId = $request->input('id');
        $userId = Auth::user()->id;

        DB::beginTransaction();

        try {
            $notepadFolder = NotepadFolder::query()->where('id', '=', $folderId)->where('user_id', '=', $userId)->first();

            if (!$notepadFolder) {
                return response()->json([
                    'status' => false,
                    'message' => 'Folder not found'
                ]);
            }

            NotepadNote::query()->where('notepad_folder_id', '=', $notepadFolder->id)->delete();
            $isDeleted = $notepadFolder->delete();

            DB::commit();

            return response()->json([
                'status' => $isDeleted,
                'message' => $isDeleted ? 'Folder deleted successfully' : 'Failed to delete folder'
            ]);
        } catch (\Exception $e) {
            DB::rollBack();

            return response()->json([
                'status' => false,
                'message' => 'An error occurred while deleting the folder'
            ]);
        }
    }
}
