<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->sub_title,
            'content' => $this->body,
            'slug' => $this->slug,
            'featured_image' => $this->cover_photo_path ? asset('storage/'.$this->cover_photo_path) : null,
            'published_at' => $this->published_at,
            'categories' => $this->categories,
            'tags' => $this->tags,
        ];
    }
}
