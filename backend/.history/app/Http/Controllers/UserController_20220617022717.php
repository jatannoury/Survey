<?php

namespace App\Http\Controllers;
use App\Models\Survey;
use Illuminate\Http\Request;

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

    public function getAnswers(){
        $question_na
    }
}
