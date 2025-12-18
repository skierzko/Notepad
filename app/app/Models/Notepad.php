<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @property int $id
 * @property int $notepad_category_id
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
class Notepad extends Model
{
    use SoftDeletes;

    protected $table = 'notepad';

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function notepadCategory()
    {
        return $this->belongsTo(NotepadCategory::class, 'notepad_category_id');
    }

    public function notepadContents()
    {
        return $this->hasMany(NotepadContent::class, 'notepad_id')
            ->orderBy('group_order')
            ->orderBy('column_order');
    }
}
