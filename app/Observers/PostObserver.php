<?php

namespace App\Observers;

use App\Enums\DefaultStatusEnum;
use App\Models\Post;
use Carbon\Carbon;

class PostObserver
{
    /**
     * Handle the Post "creating" event.
     */
    public function creating(Post $post): void
    {
        // When creating a post, ensure consistency between status and published_at
        if ($post->status === DefaultStatusEnum::PUBLISHED->value && !$post->published_at) {
            $post->published_at = now();
        }
    }

    /**
     * Handle the Post "updating" event.
     */
    public function updating(Post $post): void
    {
        // If status changed to published, set published_at if not already set
        if ($post->isDirty('status') && $post->status === DefaultStatusEnum::PUBLISHED->value) {
            if (!$post->published_at) {
                $post->published_at = now();
            }
        }
        
        // If status changed from published to unpublished/draft, clear published_at
        if ($post->isDirty('status') && $post->status !== DefaultStatusEnum::PUBLISHED->value) {
            if ($post->published_at && $post->getOriginal('status') === DefaultStatusEnum::PUBLISHED->value) {
                $post->published_at = null;
            }
        }
    }

    /**
     * Handle the Post "created" event.
     */
    public function created(Post $post): void
    {
        //
    }

    /**
     * Handle the Post "updated" event.
     */
    public function updated(Post $post): void
    {
        //
    }

    /**
     * Handle the Post "deleted" event.
     */
    public function deleted(Post $post): void
    {
        //
    }

    /**
     * Handle the Post "restored" event.
     */
    public function restored(Post $post): void
    {
        //
    }

    /**
     * Handle the Post "force deleted" event.
     */
    public function forceDeleted(Post $post): void
    {
        //
    }
}
