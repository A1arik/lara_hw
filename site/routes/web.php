<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});

//Route::post('/login','\App\Http\Controllers\Auth\LoginController@login');

/*
Auth::routes();

Route::post('/auth/authenticate',[\App\Http\Controllers\Auth\MyLoginController::class, 'authenticate']);
Route::get('/auth/authenticate',[\App\Http\Controllers\Auth\MyLoginController::class, 'authenticate']);
Route::post('/auth/register',[\App\Http\Controllers\Auth\MyLoginController::class, 'create']);
Route::get('/test/tg',[\App\Http\Controllers\SendMailTest::class, 'testTg']);

Route::get('/test/file/create',[\App\Http\Controllers\FilesOperations::class, 'CreateFile']);
Route::get('/test/file/get',[\App\Http\Controllers\FilesOperations::class, 'GetFile']);

Route::get('/test/file/send',[\App\Http\Controllers\FilesOperations::class, 'UploadFileForm']);
Route::post('/test/file/send',[\App\Http\Controllers\FilesOperations::class, 'UploadFileStore']);


Route::resource('/rest/images', \App\Http\Controllers\ImagesController::class)->names('images_web');
*/


// Должен быть последним
Route::any('{any}', function()  { return view('layouts.react');})->where('any', '.*');

/*




Route::get('/', function () {
    return view('welcome');
});

Route::get('/cars', [\App\Http\Controllers\CarController::class, 'All']);

Route::get('/changecolor',[\App\Http\Controllers\ChangeCollorController::class, 'buildForm']);
Route::post('/changecolor',[\App\Http\Controllers\ChangeCollorController::class, 'setColor']);


Маршрут для контактной формы

Route::get('/cf',[\App\Http\Controllers\cfController::class, 'index']);
Route::post('/cf',[\App\Http\Controllers\cfController::class, 'store']);




Route::resource('/colors', \App\Http\Controllers\ColorController::class)->names('colors');


Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/blog' , [App\Http\Controllers\BlogController::class, 'index'])->name('blog.index');
Route::get('/blog/{slug}' , [App\Http\Controllers\BlogController::class, 'show'])->name('blog.show');


Route::get('/portfolio' , [App\Http\Controllers\PortfolioController::class, 'index'])->name('portfolio.index');
Route::get('/portfolio-category/{slug}' , [App\Http\Controllers\PortfolioController::class, 'byCategory'])->name('portfolio.category');
Route::get('/portfolio/query' , [App\Http\Controllers\PortfolioController::class, 'byQuery'])->name('portfolio.query');


Route::get('/product' , [App\Http\Controllers\ProductController::class, 'index'])->name('product.index');
Route::get('/{slug}/product-category' , [App\Http\Controllers\ProductController::class, 'byCategory'])->name('product.category');
*/
