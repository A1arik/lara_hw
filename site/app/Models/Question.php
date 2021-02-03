<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class Question extends Model
{
    public function test(){
        return $this->belongsTo('App\Models\Test')->with('answers');
    }

    public function answers(){
        return $this->hasMany('App\Models\Answer');
    }

}
