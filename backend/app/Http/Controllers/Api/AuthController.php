<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;


use JWTAuth;
use Validator;

class AuthController extends Controller 
{
     public function __construct()
    {
        $this->middleware('api');
    }

    
    public function login(Request $req)
    {
        $creds = $req->only('email','password');
        if (!$token = JWTAuth::attempt($creds)) {
            return response()->json(['error'=>'認証失敗'], 401);
        }
        return response()->json(['token'=>$token]);
    }

    public function me()
    {
        return response()->json(auth()->user());
    }

    public function logout()
    {
        JWTAuth::invalidate(JWTAuth::getToken());
        return response()->json(['msg'=>'ログアウトしました']);
    }

    

    public function register(Request $req)
    {
        
        $validator = Validator::make($req->all(), [
            'email'    => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $user = User::create([
            'email'    => $req->email,
            'password' => Hash::make($req->password),
        ]);

        try {
                $token = JWTAuth::fromUser($user);
            } catch (\Exception $e) {
                return response()->json([
                    'message' => 'トークン生成時に例外が発生',
                    'error' => $e->getMessage(),
                    'user_id' => $user->id ?? null,
                    'user' => $user
                ], 500);
            }

        return response()->json([
            'message' => '登録成功',
            'user'    => $user,
            'token'   => $token
            ], 201)
            ->header('Content-Type', 'application/json');
    }

}
