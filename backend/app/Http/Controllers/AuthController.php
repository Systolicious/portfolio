<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


class AuthController extends Controller
{
    //show login view

    public function showLogin(){
        return view('auth.login');
    }

}
