<?php

namespace App\Traits;

use App\Enums\DefaultStatusEnum;

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
} 