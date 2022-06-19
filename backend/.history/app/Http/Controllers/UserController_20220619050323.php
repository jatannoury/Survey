<?php

namespace App\Http\Controllers;
use App\Models\Survey;
use App\Models\Question;
use Illuminate\Http\Request;
use App\Models\Admin_answer;
use App\Models\User_answer;
class UserController extends Controller
{
    public function getSurveys(){
        return Survey::all();
    }

    public function getSurveyId(Request $request){
        $name=$request->name;
        $survey_id= Survey::where("name",$name)->get();
        return response()->json([
            "status"=>"Success",
            "survey_id"=>$survey_id[0]["id"]
        ]);
    }

    public function getAnswers(Request $request){
        $question_id=$request->question_id;
        $answers= Admin_answer::where("question_id",$question_id)->get();
        return response()->json([
            "status"=>"Success",
            "answers"=>$answers
        ]);
    }

    public function setAnswers(Request $request){
        $user_ans=new User_Answer;
        $user_ans->question_id=$request->question_id;
        $user_ans->survey_id=$request->survey_id;
        $user_ans->user_answer=$request->user_answer;
        $user_ans->save();
        return response()->json([
            "status"=>"Success",
            "answers"=>$user_ans
        ]);

    }

    public function getQuestions(Request $request){
        $survey_id=$request->survey_id;
        $questions=Question::where("survey_id",$survey_id)->get();
        return response()->json([
            "status"=>"Success",
            "questions"=>$questions
        ]);
    }
}
