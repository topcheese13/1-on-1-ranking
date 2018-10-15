<?php

namespace App\Http\Controllers;

use App\Elo;
use App\Season;
use Illuminate\Http\Request;
use App\Game;
use App\Player;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class GameController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
       return view('games.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if (!$request->has(['winner', 'loser'])) {
            die('fail');
        }
        $input = $request->only(['winner', 'loser']);
        $playerOne = Player::where('alias', $input['winner'])->firstOrFail();
        $playerTwo = Player::where('alias', $input['loser'])->firstOrFail();
        $game = new Game();
        $game->winner_id = $playerOne->id;
        $game->looser_id = $playerTwo->id;
        $game->season_id = Season::all()->last()->id;
        $result = $game->save();
        $this->determineNewElos($game, $playerOne, $playerTwo);
        $this->determineNewRanks();

        return response()->json($result);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function all()
    {
        $games = DB::table('games AS g')
            ->join('players AS p1', 'p1.ID', '=', 'g.player_one_id')
            ->join('players AS p2', 'p2.ID', '=', 'g.player_two_id')
            ->select('g.*', 'p1.alias as PlayerOneAlias',  'p2.Alias as PlayerTwoAlias')
            ->get();
        return response()->json($games);
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function latest()
    {

        $date = new Carbon;

        $date->subDays(7);

        $games = DB::table('games AS g')
            ->join('players AS p1', 'p1.ID', '=', 'g.player_one_id')
            ->join('players AS p2', 'p2.ID', '=', 'g.player_two_id')
            ->select('g.*', 'p1.alias as PlayerOneAlias',  'p2.alias as PlayerTwoAlias')
            ->whereDate('g.created_at', '>', $date->toDateTimeString())
            ->limit(10)
            ->get();
        return response()->json($games);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    /**
     * @param $game
     * @param $playerOne
     * @param $playerTwo
     */
    private function determineNewElos($game, $playerOne, $playerTwo) {
        $kFactor = 32;

        $scoreOne = 0;
        $scoreTwo = 0;

        $game->WinnerID == $playerOne->ID ? $scoreOne = 1 : $scoreTwo = 1;

        $expectedScoreA = 1 / ( 1 + ( pow( 10 , ( $playerTwo->Elo - $playerOne->Elo ) / 400 ) ) );
        $expectedScoreB = 1 / ( 1 + ( pow( 10 , ( $playerOne->Elo - $playerTwo->Elo ) / 400 ) ) );

        $newRatingA = $playerOne->Elo + ( $kFactor * ( $scoreOne - $expectedScoreA ) );
        $newRatingB = $playerTwo->Elo + ( $kFactor * ( $scoreTwo - $expectedScoreB ) );

        $elo = new Elo();
        $elo->created_at = $game->created_at;
        $elo->player_id = $playerOne->id;
        $elo->elo = $newRatingA;
        $elo->season_id = $game->season_id = Season::all()->last()->id;
        $elo->save();
        $elo = new Elo();
        $elo->DateTime = $game->DateTime;
        $elo->PlayerID = $playerTwo->ID;
        $elo->Elo = $newRatingB;
        $elo->SeasonID = $game->SeasonID = Season::all()->last()->ID;
        $elo->save();

        $playerOne->Elo = $newRatingA;
        $playerOne->save();
        $playerTwo->Elo = $newRatingB;
        $playerTwo->save();
    }

    private function determineNewRanks() {
        DB::statement('
            SET @rownumber = 0;
        ');
        return DB::update('
            UPDATE players SET Rank = (@rownumber:=@rownumber+1)
            ORDER BY Elo DESC;
        ');
    }
}
