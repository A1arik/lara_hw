<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Call;
use Illuminate\Http\Request;

class UserMessageController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $newCall = new Call();
        $newCall->userName = $request->userName;
        $newCall->userPhone = $request->userPhone;
        $newCall->userEmail = $request->userEmail;
        $newCall->userMessage = $request->userMessage;
        $newCall->save();
        return 'Ok';
    }

}
