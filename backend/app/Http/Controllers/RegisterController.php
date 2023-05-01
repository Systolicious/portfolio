<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RegisterController extends Controller
{
    // show register view

    public function showRegister(){
        return view('auth.register');
    }
}
