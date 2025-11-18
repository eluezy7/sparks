<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    //
    protected $fillable = [
        // 'name', // 今は不要とのこと
        'date',
    ];
}
