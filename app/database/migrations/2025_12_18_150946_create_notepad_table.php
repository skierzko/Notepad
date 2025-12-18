<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('notepad', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('notepad_category_id');
            $table->unsignedBigInteger('user_id');

            $table->string('title');
            $table->text('description')->nullable();

            $table->timestamps();
            $table->softDeletes();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('notepad_category_id')->references('id')->on('notepad_categories')->onDelete('cascade');
        });

        Schema::create('notepad_categories', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('title');
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });

        Schema::create('notepad_contents', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('notepad_id');
            $table->integer('group_order')->default(0);
            $table->integer('column_order')->default(1);
            $table->text('content')->nullable();

            $table->timestamps();
            $table->softDeletes();

            $table->foreign('notepad_id')->references('id')->on('notepad')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('notepad_contents');
        Schema::dropIfExists('notepad_categories');
        Schema::dropIfExists('notepad');
    }
};
