<?php

use App\Http\Controllers\UserController;
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

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/get/products/list',[UserController::class, 'getProductsList'])->name('products.list');

Route::post('/get/individual/products/list',[UserController::class, 'getProductList'])->name('products.list');

Route::post('/update/products/list',[UserController::class, 'updateProductList']);

Route::delete('/delete/products/list/{product}',[UserController::class, 'destroy']);

Route::post('/store/products/list',[UserController::class, 'store']);