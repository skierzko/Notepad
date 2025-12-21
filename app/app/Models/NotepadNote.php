<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Auth;

/**
 * @property int $id
 * @property int $notepad_folder_id
 * @property int $user_id
 * @property string $title
 * @property string|null $description
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @property \Carbon\Carbon|null $deleted_at
 *
 * @property-read \App\Models\User $user
 * @property-read \App\Models\NotepadCategory $category
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\NotepadContent[] $contents
 */
class NotepadNote extends Model
{
    use SoftDeletes;

    protected $table = 'notepad_notes';

    public static function query()
    {
        return NotepadNote::where('user_id', Auth::user()->id);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function notepadCategory()
    {
        return $this->belongsTo(NotepadFolder::class, 'notepad_folder_id');
    }

    public function notepadContents()
    {
        return $this->hasMany(NotepadContent::class, 'notepad_note_id')
            ->orderBy('group_order')
            ->orderBy('column_order');
    }
}
