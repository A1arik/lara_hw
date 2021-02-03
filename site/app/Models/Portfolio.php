<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Portfolio extends Model
{
    use HasFactory;

    /**
     * функция имет имя сущности, к которой относится этот элемент
     */
    public function portfolio_category()
    {
        return $this->belongsTo('App\Models\Portfolio_Category');
    }
}
