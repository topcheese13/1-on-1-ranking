<!DOCTYPE html>
<html lang="en" class="no-js">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>1 on 1 Ranking</title>
    <meta name="description" content="">
    <meta name="author" content="Vanilla Forums">
    <meta name="format-detection" content="telephone=no">
    <meta name="theme-color" content="#0291db">
    <meta name="msapplication-navbutton-color" content="#0291db">
    <link href="/css/styles.css" rel="preload" as="style" onload="this.onload=null;this.rel='stylesheet'">
</head>
<body>
<div id="app"></div>
<?php
if (env('APP_ENV', false) === 'local') {
    echo '<script type="text/javascript" src="http://localhost:3030/main.js"></script>';
} else {
    echo '<script type="text/javascript" src="/js/main.js"></script>';
}
?>
</body>
