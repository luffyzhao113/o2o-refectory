<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class BaseAdminAddFeild extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('base_admins', function (Blueprint $table) {
            $table->string('name', 20)->comment('管理员姓名');
            $table->string('photo')->nullable()->comment('管理员手机号码');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('base_admins', function (Blueprint $table) {
            $table->dropColumn('name');
            $table->dropColumn('photo');
        });
    }
}