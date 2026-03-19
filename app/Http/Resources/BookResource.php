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
            'cover' => $this->featured_image ? asset("storage/".$this->featured_image) : null,
            'summary' => $this->summary,
            'audience' => $this->audience,
            'classrooms' => $this->classrooms ? collect($this->classrooms)->map(function ($classroom) {
                return in_array($classroom, array_column(ClassroomsEnum::cases(), 'value'))
                    ? ClassroomsEnum::from($classroom)->label()
                    : $classroom;
            })->toArray() : [],
            'genre' => $this->theme ? (
                in_array($this->theme, array_column(LiteratureGenreEnum::cases(), 'value')) 
                    ? LiteratureGenreEnum::from($this->theme)->label() 
                    : $this->theme
            ) : null,
        ];
    }

    public function getAuthors()
    {
        return AuthorResource::collection($this->authors);
    }
}

