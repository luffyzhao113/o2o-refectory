<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSellerCertificatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('seller_certificates', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('seller_id')->unique()->comment('店铺Id');;
            // 证明材料
            $table->string('name', 50)->comment('店铺法人');
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
        Schema::dropIfExists('seller_certificates');
    }
}
