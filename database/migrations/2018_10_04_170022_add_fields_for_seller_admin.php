<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddFieldsForSellerAdmin extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('seller_admins', function (Blueprint $table) {
            $table->string('name', 20)->comment('管理员姓名');
            $table->string('photo')->nullable()->comment('管理员头像');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('seller_admins', function (Blueprint $table) {
            $table->dropColumn('name');
            $table->dropColumn('photo');
        });
    }
}
