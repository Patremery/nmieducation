<?php

namespace App\Enums;

enum AudienceEnum: string
{
    case GENERAL_PUBLIC = 'Grand Public';
    case PARENTS = 'Parents';
    case CHILDREN = 'Enfants';
    case TEACHERS = 'Enseignants';

    public function label(): string
    {
        return match ($this) {
            self::GENERAL_PUBLIC => 'Grand Public',
            self::PARENTS => 'Parents',
            self::CHILDREN => 'Enfants',
            self::TEACHERS => 'Enseignants',
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