<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function addQuestion(Request $request){
        $question=new Question;
        $question->type=$request->type;
        $question->content=$request->content;
        $
    }
}
