<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserInfo extends Model
{
    protected $fillable = ['name', 'address', 'tel','job','desired_job','desired_annual_income'];
    
}
