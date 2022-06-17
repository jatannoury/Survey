<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JWTController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\UserController;

Route::group(['prefix' => 'admin'], function($router) {

});
Route::group(['middleware' => 'admin'], function($router) {
    Route::post('/register', [JWTController::class, 'register']);
    Route::post('/login', [JWTController::class, 'login']);

});

    Route::post('/add_question', [AdminController::class, 'addQuestion']);
    Route::get('/get_question', [AdminController::class, 'getQuestion']);
    Route::post('/add_survey', [AdminController::class, 'addSurvey']);
    Route::get('/get_survey', [UserController::class, 'getSurveyId']);
    Route::post('/add_answer', [AdminController::class, 'addAnswer']);
    Route::get('/get_answer', [UserController::class, 'getAnswers']);
    Route::post('/set_user_answer', [UserController::class, 'setAnswers']);
    Route::get('/not_found', [AdminController ::class, 'notFound'])->name("not-found");
    

