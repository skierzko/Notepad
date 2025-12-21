<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @property int $id
 * @property int $notepad_note_id
 * @property int $group_order
 * @property int $column
 * @property string|null $content
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @property \Carbon\Carbon|null $deleted_at
 *
 * @property-read \App\Models\Note $note
 */
class NotepadContent extends Model
{
    use SoftDeletes;

    protected $table = 'notepad_contents';

    public function note()
    {
        return $this->belongsTo(NotepadNote::class, 'notepad_note_id');
    }
}
