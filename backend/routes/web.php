<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// authentification : show the connection page

Route::get('/login', [AuthController::class, 'showLogin'])->name('auth.login.show');
Route::post('/login', [AuthController::class, 'processLogin'])->name('auth.login.process');