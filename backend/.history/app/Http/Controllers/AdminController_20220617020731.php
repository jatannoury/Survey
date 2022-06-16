<?php

namespace App\Http\Controllers;
use App\Models\Question;
use App\Models\Survey;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function addQuestion(Request $request){
        $question=new Question;
        $question->type=$request->type;
        $question->content=$request->content;
        $question->survey_id=$request->survey_id;
        $question->save();
        return response()->json([
            "status"=>"Success",
            "quesrtion"=>$question
        ]);
    }

    public function addSurvey(Request $request){
        $survey=new Survey;
        $survey->name=$request->name;
        $survey->save();
        return response()->json([
            "status"=>"Success",
            "survey"=>$survey
        ]);

    }

    public function addAnswers(Request $request){
        $answer=new Amin_answer;
        $answer->question_id=$request->question_id;
        $answer->answer=$request->answer;
        
    }
}
