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
            'content' => $this->content,
            'slug' => $this->slug,
            'featured_image' => $this->featured_image ? asset('storage/'.$this->featured_image) : null,
            'published_at' => $this->published_at,
            'categories' => $this->categories,
            'tags' => $this->tags,
        ];
    }
}
