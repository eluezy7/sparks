<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\UserInfo;

class UserInfoController extends Controller
{
    // GET /api/todos
    public function index()
    {
        return response()->json(UserInfo::all());
    }

    // GET /api/todos/{id}
    public function show($id)
    {
        $userInfo = UserInfo::find($id);
        if (!$userInfo) {
            return response()->json(['message' => 'Not Found'], 404);
        }
        return response()->json($userInfo);
    }

    // POST /api/todos
    public function store(Request $request)
    {
        $data = $request->validate([
            'name'       => 'string',
            'address' => 'string',
            'tel' => 'string',
            'job' => 'string',
            'desired_job' => 'string',
            'desired_annual_income' => 'string',
            
        ]);

        $userInfo = UserInfo::create($data);

        return response()->json($userInfo, 201);
    }
}
