<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AuthorResource extends JsonResource
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
            'name' => $this->name,
            'slug' => $this->slug,
            'profession' => $this->profession,
            'biography' => $this->biography,
            'photo' => $this->photo,
            'linkedin' => $this->linkedin_url,
            'facebook' => $this->facebook_url,
            'twitter' => $this->twitter_url,
            //'latest_book' => $this->books->published()->latest()->first(),
            'books' => BookResource::collection($this->whenLoaded('books')),
        ];
    }
}
