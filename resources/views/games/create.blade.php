<form action="/game/create" method="POST">
    <input name="player1" placeholder="player #1">
    <input name="player2" placeholder="player #2">
    <input name="winner" placeholder="winner">
    <input type="hidden" name="_token" value="{{ csrf_token() }}">
    <button name="submit">button</button>
</form>
