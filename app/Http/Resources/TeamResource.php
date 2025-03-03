<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TeamResource extends JsonResource
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
            'position' => $this->position,
            'photo' => asset('storage/'.$this->photo),
            'facebook' => $this->facebook_url,
            'linkedin' => $this->linkedin_url,
            'bio' => $this->bio,
        ];
       
    }
}
