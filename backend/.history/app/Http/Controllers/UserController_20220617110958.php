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
        $survey_id=$request->survey_id;
        return Admin_answer::where("survey_id",$survey_id)->get();
        // return response()->json([
        //     "status"=>"Success",
        //     "answers"=>$answers
        // ]);
    }
}
