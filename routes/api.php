<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

    Route::prefix('auth')->group(function () {
        // Below mention routes are public, user can access those without any restriction.
        // Create New User
        Route::post('/register', [AuthController::class, 'register']);
        // Login User
        Route::post('/login', [AuthController::class, 'login']);

        // Refresh the JWT Token
        Route::post('/refresh', [AuthController::class, 'refresh']);

        // Below mention routes are available only for the authenticated users.
        Route::middleware('auth:api')->group(function () {
            // Get user info
            Route::get('/user-profile', [AuthController::class, 'userProfile']);
            // Logout user from application
            Route::post('/logout', [AuthController::class, 'logout']);
        });
    });

