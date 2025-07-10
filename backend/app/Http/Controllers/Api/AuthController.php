<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
//use JWTAuth;
use Tymon\JWTAuth\Facades\JWTAuth;
use Validator;

class AuthController extends Controller
{
    public function __construct()
    {
       // $this->middleware('auth:api')->except(['login', 'register']);
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

        $token = JWTAuth::fromUser($user);

        return response()->json([
            'message' => '登録成功',
            'user'    => $user,
            'token'   => $token
            ], 201);
    }

}
