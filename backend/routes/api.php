<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JWTController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\UserController;
Route::group(['prefix' => 'v1'], function($router) {
    Route::group(['prefix' => 'admin'], function($router) {
        Route::post('/register', [JWTController::class, 'register']);
        Route::post('/login', [JWTController::class, 'login']);
    
        Route::group(['middleware' => 'admin'], function($router) {
    
            Route::post('/add_question', [AdminController::class, 'addQuestion']);
            Route::post('/add_survey', [AdminController::class, 'addSurvey']);
            Route::post('/add_answer', [AdminController::class, 'addAnswer']);
            Route::post('/logout', [JWTController::class, 'logout']);
            Route::post('/refresh', [JWTController::class, 'refresh']);
            Route::post('/profile', [JWTController::class, 'profile']);
        });
    });
    
        Route::group(['prefix' => 'user'], function($router) {
            Route::get('/get_questions', [UserController::class, 'getQuestions']);
            Route::get('/get_survey', [UserController::class, 'getSurveyId']);
            Route::get('/get_answer', [UserController::class, 'getAnswers']);
            Route::get('/get_surveys', [UserController::class, 'getSurveys']);
            Route::post('/set_user_answer', [UserController::class, 'setAnswers']);
            
        });
        Route::get('/not_found', [AdminController ::class, 'notFound'])->name("not-found"); 
});


    
    
    

