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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::resource('/images', \App\Http\Controllers\API\ImagesController::class);

Route::resource('/colors', \App\Http\Controllers\API\ColorController::class);

Route::get('/portfolios', [\App\Http\Controllers\API\PortfolioController::class, 'index']);
Route::get('/portfolios/{id}', [\App\Http\Controllers\API\PortfolioController::class, 'show']);
Route::post('/contactform', [\App\Http\Controllers\API\UserMessageController::class, 'store']);

Route::resource('/crud', \App\Http\Controllers\API\CrudController::class);

Route::resource('/tests', \App\Http\Controllers\API\TestController::class);
Route::resource('/questions', \App\Http\Controllers\API\QuestionController::class);
