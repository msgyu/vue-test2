<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::group(['middleware' => ['auth:airlock']], function () {
    Route::get('user', function (Request $request) {
        return response()->json(['user' => $request->user()]);
    });
    Route::post('logout', 'Auth\Api\LoginController@logout')->name('api.logout');
});

Route::post('register', 'Auth\Api\RegisterController@register')->name('api.register');
Route::post('login', 'Auth\Api\LoginController@login')->name('api.login');

Route::resource('tasks', 'TaskController');