<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JWTController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\UserController;


Route::group(['middleware' => 'api'], function($router) {
    Route::post('/register', [JWTController::class, 'register']);
    Route::post('/login', [JWTController::class, 'login']);
    Route::post('/logout', [JWTController::class, 'logout']);
    Route::post('/refresh', [JWTController::class, 'refresh']);
    Route::post('/profile', [JWTController::class, 'profile']);
});

    Route::post('/add_question', [AdminController::class, 'addQuestion']);
    Route::post('/add_survey', [AdminController::class, 'addSurvey']);
    Route::get('/get_survey', [UserController::class, 'getSurveyId']);
    Route::post('/add_answer', [AdminController::class, 'addAnswer']);
    

