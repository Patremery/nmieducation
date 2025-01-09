<?php

namespace App\Traits;

use App\Enums\DefaultStatusEnum;
use Filament\Forms\Components\Select;

trait DefaultStatusField
{
    public static function getStatusField(): Select
    {
        return Select::make('status')
            ->label(__('Status'))
            ->options(options: DefaultStatusEnum::options())
            ->enum(DefaultStatusEnum::class)
            ->required();
    }
}
