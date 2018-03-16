<!DOCTYPE html>
<html>
<head>
    <title>Player {{ $player->id }}</title>
</head>
<body>
<h1>Player {{ $player->id }}</h1>
<ul>
    <li>Alias: {{ $player->alias }}</li>
    <li>Elo: {{ $player->elo }}</li>
    <li>Rank: {{ $player->rank }}</li>
</ul>
</body>
</html>
