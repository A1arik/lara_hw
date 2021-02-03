<?php

namespace App\Http\Controllers;

use App\Models\Call;
use Illuminate\Http\Request;

class cfController extends Controller
{
    public function index(){
        return view('cf.request_form');
    }

    public function store(Request $request){
        $newCall = new Call();
        $newCall->userName = $request->userName;
        $newCall->userPhone = $request->userPhone;
        $newCall->save();
        return view('cf.response',['userName' => $request->userName]);
    }
}
