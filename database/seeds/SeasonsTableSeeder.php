<?php

use Illuminate\Database\Seeder;

class SeasonsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('seasons')->insert([
            'number' => 1,
            'start_date' => now(),
            'end_date' => now(),
            'created_at' => now(),
        ]);
    }
}
