<?php

namespace App\Searchs\Modules\Seller\Admin\Permission;

use luffyzhao\laravelTools\Searchs\Facades\SearchAbstract;

class EditSearch extends SearchAbstract
{
    protected $relationship = [
    ];

    protected function defaultArray()
    {
        return [
            ['islink', '=', '1']
        ];
    }
}
