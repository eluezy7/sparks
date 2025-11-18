<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;
use Illuminate\Validation\ValidationException;

class Handler extends ExceptionHandler
{
    // ここに既存のプロパティや関数があることもある（省略可能）

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        //
    }

    // 💥 これを追加！
    public function render($request, Throwable $exception)
    {
        if ($request->expectsJson()) {
            return response()->json([
                'error' => $exception->getMessage(),
            ], 500); // 必要なら適切なステータスコードに変更
        }

        return parent::render($request, $exception);
    }

    // 🎁 バリデーション例外に対応したい場合（オプション）
    protected function invalidJson($request, ValidationException $exception)
    {
        return response()->json([
            'message' => 'バリデーションエラー',
            'errors' => $exception->errors(),
        ], 422);
    }
}
