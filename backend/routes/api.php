
<?php
// routes/api.php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserInfoController;


Route::apiResource('user-infos', UserInfoController::class)
     ->only(['index','show','store']);
Route::get('user-infos', [UserInfoController::class, 'index']);

Route::get('/ping', function () {
    return response()->json(['message' => 'pong']);

});

// routes/api.php
Route::post('/auth/login', [AuthController::class,'login']);

Route::middleware('auth:api')->group(function(){
    Route::get('/auth/me', [AuthController::class,'me']);
    Route::post('/auth/logout',[AuthController::class,'logout']);
});

Route::post('/auth/register', [AuthController::class, 'register']);


Route::options('/{any}', function () {
    return response('', 204)
        ->header('Access-Control-Allow-Origin', 'http://localhost:3000')
        ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
        ->header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
        ->header('Access-Control-Allow-Credentials', 'true');
})->where('any', '.*');

