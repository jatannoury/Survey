<?php

namespace App\Http\Controllers;
use App\Models\Survey;
use Illuminate\Http\Request;
use App\Models\Admin_answer;
class UserController extends Controller
{
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
        return Admin_answer::where("surveyid",$question_id)->get();
        // return response()->json([
        //     "status"=>"Success",
        //     "answers"=>$answers
        // ]);
    }
}
