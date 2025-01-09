<?php

namespace App\Enums;

enum DefaultStatusEnum: string
{
    case PUBLISHED = 'published';
    case UNPUBLISHED = 'unpublished';
    case DRAFT = 'draft';

    public function label(): string {
        return match($this) {
            self::PUBLISHED => __('Published'),
            self::UNPUBLISHED => __('Unpublished'),
            self::DRAFT => __('Draft'),
        };
    }

    public static function options(): array
    {
        return collect(self::cases())->mapWithKeys(fn (self $enum) => [$enum->value => $enum->label()])->toArray();
    }

    public static function values(): array
    {
        return array_column(self::cases(), 'value');
    }

}
