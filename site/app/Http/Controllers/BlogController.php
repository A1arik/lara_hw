<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function index(){
        return view('blog.index', [ 'posts' => \TCG\Voyager\Models\Post::all() ]);
    }

    public function show ($slug){
        return view('blog.show',
            [
            // Имя, как я буду во view обращаться => данные
                'post' => \TCG\Voyager\Models\Post::where('slug', $slug)->firstOrFail(),
                'someVal' => 'Мне туда еще инфы нужно'
            ]);
    }
}
