<?php

namespace App\Enums;

enum BookFormat: string
{
    case PAPER = 'paper';
    case DIGITAL = 'digital';
    case BOTH = 'both';

    public function label(): string
    {
        return match($this) {
            self::PAPER => 'Papier',
            self::DIGITAL => 'Numérique',
            self::BOTH => 'Papier et numérique',
        };
    }

    public static function options(): array
    {
        return collect(self::cases())->mapWithKeys(fn (self $enum) => [$enum->value => $enum->label()])->toArray();
    }
} 