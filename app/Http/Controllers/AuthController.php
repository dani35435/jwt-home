<?php

namespace App\Http\Controllers;

use http\Cookie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    /**
     * Register a new user
     */
    public function register(Request $request)
    {
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->save();

        return response()->json(['status' => 'success'], 200);
    }

    /**
     * Login user and return a token
     */
    public function login()
    {
        $credentials = request(['email', 'password']);

        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => ['code' => '401','message' => 'Не авторизован']], 401);
        }

        return $this->respondWithToken($token);
    }

    /**
     * Logout User
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Вы успешно покинули систему']);
    }
    /**
     * Get authenticated user
     */
    public function user(Request $request)
    {
        $user = User::find(Auth::user()->id);
        return response()->json([
            'status' => 'success',
            'data' => $user
        ]);
    }

    /**
     * Refresh JWT token
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    protected function respondWithToken($token)
    {
        return response()->json([
            'accessToken' => $token,
            'refreshToken' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 999
        ]);
    }
}
