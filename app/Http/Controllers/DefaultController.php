<?php

namespace App\Http\Controllers;

use App\Player;
use App\Game;

class DefaultController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $players = Player::orderBy('Rank', 'ASC')->get();
        $beginOfDay = date('Y-m-d H:i:s', strtotime("midnight", time()));
        $endOfDay = date('Y-m-d H:i:s', strtotime("tomorrow", strtotime("midnight", time())) -1);
        $todaysGames = Game::where([
            ['DateTime', '>', $beginOfDay],
            ['DateTime', '<', $endOfDay],
        ])->get();


        $yesterdaysGames = Game::where([
            ['DateTime', '>', date('Y-m-d H:i:s',strtotime('-1 day',strtotime($beginOfDay)))],
            ['DateTime', '<', date('Y-m-d H:i:s',strtotime('-1 day',strtotime($endOfDay)))],
        ])->get();

        return response()->json([
            'players' => $players,
            'todaysGame' => $todaysGames,
            'yesterdaysGames' => $yesterdaysGames,
        ]);
    }
}
