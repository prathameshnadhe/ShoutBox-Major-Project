<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Users;
use Illuminate\Support\Facades\Hash;


class UsersController extends Controller
{
    function register(Request $request) {

        $user= new Users;
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->password = Hash::make($request->input('password'));
        $user->save();
        $response['message'] = "User Registration Successfully";
        $response['data'] = $request->all();
        return response()->json($response);
    }

    function login(Request $request) {

        $user = Users::where('email',$request->email)->first();
        if(!$user || !Hash::check($request->password, $user->password))
        {
            $response['status'] = 0;
            $response['message'] = "Email or password is wrong!!";
            return response()->json($response);
        }
        else{
            // echo $user;
            $response['status'] = 1;
            $response['message'] = "Login Successfully";
            $response['data'] = $user;
            return response()->json($response);
        }

    }
}
