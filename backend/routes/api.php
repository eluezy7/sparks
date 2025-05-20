
<?php
// routes/api.php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\UserInfoController;

Route::apiResource('user-infos', UserInfoController::class)
     ->only(['index','show','store']);
Route::get('user-infos', [UserInfoController::class, 'index']);

Route::get('/ping', function () {
    return response()->json(['message' => 'pong']);
});
