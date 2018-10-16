<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['prefix' => 'api/v1'], function() {
    // api/v1/players
    // fetches all players
    Route::get('players/{order?}', 'PlayerController@all');
    // api/v1/player/alias
    // fetches player by alias
    Route::get('player/{alias}', 'PlayerController@show');
    // api/v1/games
    // fetches all games
    Route::get('games', 'GameController@all');
    // api/v1/game
    // create a game
    Route::post('game', 'GameController@store');
    // api/v1/games/latest
    // fetches games in the last 7 days
    Route::get('games/latest', 'GameController@latest');
});

// All urls not beginning with api/v1
Route::get('{reactRoutes}', function () {
    return view('index'); // your start view
})->where('reactRoutes', '^((?!api/v1).)*$'); // except 'api' word















/**
Route::get('/', 'DefaultController@index');

// Players

Route::get('player/{alias}', 'PlayerController@show');

// Games
Route::get('games', 'GameController@all');
Route::get('game/create', 'GameController@create');
Route::post('game/create', 'GameController@store');

// Seasons

Route::get('season/new', 'SeasonController@store');
**/


