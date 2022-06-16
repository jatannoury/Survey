<?php

namespace App\Http\Controllers;
use App\Models\Survey;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getSurveyId(Request $request){
        $survey_id=Survey::where("name",$request->name)->get();
        return response()->json([
            "status"=>"Success",
            "survey_id"=>$survey_id
        ]);
    }
}
