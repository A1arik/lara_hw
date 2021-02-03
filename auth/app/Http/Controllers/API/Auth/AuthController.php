<?php

namespace App\Http\Controllers\API\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $login = $request->validate(
            [
                'email' => 'required|string',
                'password' => 'required|string'
            ]
        );

        if (!Auth::attempt($login, true)){
            return response(['status'=> false, 'message'=>'Invalid email or pswd'], 403);
        }
        // 'user_name' => Auth::user()->name
        return response(['status'=> true, 'access_token' => Auth::user()->getRememberToken(), 'name' =>  Auth::user()->name], 200);
    }


    public function postUser($access_token){
        $user = User::where(['remember_token'=>$access_token])->first();
        return $user;
        //return response(['status'=> true, 'user' => Auth::user()], 200);
    }


}
