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

// Home page

Route::get('/', 'DefaultController@index');

// Players
Route::get('players', 'PlayerController@all');
Route::get('player/{alias}', 'PlayerController@show');

// Games
Route::get('games', 'GameController@all');
Route::get('game/create', 'GameController@create');
Route::post('game/create', 'GameController@store');

// Seasons

Route::get('season/new', 'SeasonController@store');


