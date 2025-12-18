<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @property int $id
 * @property int $user_id
 * @property string $title
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @property \Carbon\Carbon|null $deleted_at
 *
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Notepad[] $notepad
 */
class NotepadCategory extends Model
{
    use SoftDeletes;

    protected $table = 'notepad_categories';

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function notepad()
    {
        return $this->hasMany(Notepad::class, 'notepad_category_id');
    }
}
