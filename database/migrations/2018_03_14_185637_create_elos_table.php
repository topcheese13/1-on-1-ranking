<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateElosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Elos', function (Blueprint $table) {
            $table->increments('ID');
            $table->integer('PlayerID');
            $table->integer('SeasonID');
            $table->datetime('DateTime');
            $table->integer('Elo');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('elos');
    }
}
