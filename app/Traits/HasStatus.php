<?php

namespace App\Traits;

use App\Enums\DefaultStatusEnum;
use Filament\Forms\Components\Select;
use Filament\Tables\Columns\TextColumn;

trait HasStatus
{
    public function scopePublished($query)
    {
        return $query->where('status', DefaultStatusEnum::PUBLISHED->value);
    }

    public function scopeUnpublished($query)
    {
        return $query->where('status', DefaultStatusEnum::UNPUBLISHED->value);
    }

    public function scopeDraft($query)
    {
        return $query->where('status', DefaultStatusEnum::DRAFT->value);
    }

    public static function getStatusColumn(): TextColumn {
        return TextColumn::make('status')
                        ->label("Statut")
                        ->sortable()
                        ->badge()
                        ->color(fn (string $state): string => match ($state) {
                            DefaultStatusEnum::PUBLISHED->value => 'success',
                            DefaultStatusEnum::UNPUBLISHED->value => 'danger',
                            DefaultStatusEnum::DRAFT->value => 'warning',
                            default => 'danger',
                        })
                        ->formatStateUsing(fn (string $state) => match ($state) {
                            DefaultStatusEnum::PUBLISHED->value => __('status.published'),
                            DefaultStatusEnum::UNPUBLISHED->value => __('status.unpublished'),
                            DefaultStatusEnum::DRAFT->value => __('status.draft'),
                            default => __('status.unpublished'),
                        });
    }

    public static function getStatusField(): Select
    {
        return Select::make('status')
            ->label(__('Statut'))
            ->options(options: DefaultStatusEnum::options())
            ->enum(DefaultStatusEnum::class)
            ->required();
    }
} 