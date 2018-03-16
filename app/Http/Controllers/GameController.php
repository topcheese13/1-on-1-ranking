<?php

namespace App\Http\Controllers;

use App\Elo;
use App\Season;
use Illuminate\Http\Request;
use App\Game;
use App\Player;
use Illuminate\Support\Facades\DB;

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
        if (!$request->has(['player1', 'player2', 'winner'])) {
            die('fail');
        }
        $input = $request->only(['player1', 'player2', 'winner']);
        $playerOne = Player::where('Alias', $input['player1'])->firstOrFail();
        $playerTwo = Player::where('Alias', $input['player2'])->firstOrFail();
        $game = new Game();
        $game->PlayerOneID = $playerOne->ID;
        $game->PlayerTwoID = $playerTwo->ID;
        $game->SeasonID = Season::all()->last()->ID;
        if($input['player1'] == $input['winner']) {
            $game->WinnerID = $playerOne->ID;
        } else {
            $game->WinnerID = $playerTwo->ID;
        }
        $game->DateTime = date('Y-m-d H:i:s');
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
        $games = Game::join('Players as p1', 'p1.ID', '=', 'games.playerOneID')
            ->join('Players as p2', 'p2.ID', '=', 'games.playerTwoID')
            ->select('Games.*', 'p1.Alias as PlayerOneAlias', 'p2.Alias as PlayerTwoAlias')
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
        $elo->DateTime = $game->DateTime;
        $elo->PlayerID = $playerOne->ID;
        $elo->Elo = $newRatingA;
        $elo->SeasonID = $game->SeasonID = Season::all()->last()->ID;
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
            UPDATE Players SET Rank = (@rownumber:=@rownumber+1)
            ORDER BY Elo DESC;
        ');
    }
}
