<?php

namespace App\Http\Resources;

use App\Enums\LiteratureGenreEnum;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Enums\ClassroomsEnum;

class BookResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            //'author' => $this->author?->name ?? 'NMI Education',
            'slug' => $this->slug,
            'authors' => $this->getAuthors(),
            'title' => $this->title,
            'category' => $this->category->code,
            'price' => $this->price,
            'images' => $this->images ?? [],
            'new' => $this->new ? 'Yes' : 'No',
            'support' => $this->support,
            'pages' => $this->pages,
            'collection' => $this->collection ? new CollectionResource($this->whenLoaded("collection")) : null,
            'publicationDate' => $this->publication_date,
            'language' => $this->language->name,
            'youscribe_url' => $this->youscribe_url,
            'amazon_url' => $this->amazon_url,
            'lq_url' => $this->lq_url,
            'adinkra_url' => $this->adinkra_url,
            'isbn' => $this->ISBN,
            'description' => strip_tags($this->description),
            'cover' => asset("storage/".$this->featured_image),
            'summary' => $this->summary,
            'audience' => $this->audience,
            'classrooms' => $this->classrooms ? collect($this->classrooms)->map(function ($classroom) {
                return ClassroomsEnum::from($classroom)->label();
            })->toArray() : [],
            'genre' => $this->theme ? LiteratureGenreEnum::from($this->theme)->label() : null,
        ];
    }

    public function getAuthors()
    {
        return AuthorResource::collection($this->authors);
    }
}

